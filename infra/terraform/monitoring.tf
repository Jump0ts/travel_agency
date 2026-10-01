# --- External checks: is the site up, fast, and is its certificate valid? ---

resource "digitalocean_uptime_check" "site" {
  name    = "${var.project_name}-health"
  target  = var.site_url
  regions = ["eu_west", "us_east"]
}

resource "digitalocean_uptime_alert" "down" {
  name       = "${var.project_name}-down"
  check_id   = digitalocean_uptime_check.site.id
  type       = "down"
  period     = "2m"
  notifications {
    email = [var.alert_email]
  }
}

resource "digitalocean_uptime_alert" "slow" {
  name       = "${var.project_name}-slow"
  check_id   = digitalocean_uptime_check.site.id
  type       = "latency"
  threshold  = 1500
  comparison = "greater_than"
  period     = "5m"
  notifications {
    email = [var.alert_email]
  }
}

resource "digitalocean_uptime_alert" "ssl_expiry" {
  name       = "${var.project_name}-ssl-expiry"
  check_id   = digitalocean_uptime_check.site.id
  type       = "ssl_expiry"
  threshold  = 14
  comparison = "less_than"
  period     = "1h"
  notifications {
    email = [var.alert_email]
  }
}

# --- Server resources (uses the monitoring agent enabled on the droplet) ---

locals {
  resource_alerts = {
    cpu    = { type = "v1/insights/droplet/cpu", value = 80, window = "10m" }
    memory = { type = "v1/insights/droplet/memory_utilization_percent", value = 85, window = "10m" }
    disk   = { type = "v1/insights/droplet/disk_utilization_percent", value = 80, window = "5m" }
  }
}

resource "digitalocean_monitor_alert" "server" {
  for_each = local.resource_alerts

  description = "${var.project_name}: ${each.key} above ${each.value.value}%"
  type        = each.value.type
  compare     = "GreaterThan"
  value       = each.value.value
  window      = each.value.window
  entities    = [digitalocean_droplet.web.id]
  enabled     = true

  alerts {
    email = [var.alert_email]
  }
}
