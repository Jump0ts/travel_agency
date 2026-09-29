resource "digitalocean_ssh_key" "admin" {
  name       = "${var.project_name}-admin"
  public_key = file(pathexpand(var.ssh_public_key_path))
}

resource "digitalocean_tag" "project" {
  name = var.project_name
}

resource "digitalocean_droplet" "web" {
  name       = "${var.project_name}-web"
  region     = var.region
  size       = var.droplet_size
  image      = var.droplet_image
  ssh_keys   = [digitalocean_ssh_key.admin.fingerprint]
  tags       = [digitalocean_tag.project.id]
  monitoring = true # free DigitalOcean metrics agent (CPU, RAM, disk)
  ipv6       = true

  # First-boot provisioning: Docker, a non-root deploy user, swap and hardened SSH.
  user_data = templatefile("${path.module}/cloud-init.yaml.tftpl", {
    admin_public_key = trimspace(file(pathexpand(var.ssh_public_key_path)))
  })
}

resource "digitalocean_firewall" "web" {
  name        = "${var.project_name}-web"
  droplet_ids = [digitalocean_droplet.web.id]

  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = var.admin_ssh_cidrs
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "icmp"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "udp"
    port_range            = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "icmp"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}
