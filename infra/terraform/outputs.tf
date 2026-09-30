output "droplet_ipv4" {
  description = "Public IPv4 address of the web server."
  value       = digitalocean_droplet.web.ipv4_address
}

output "droplet_ipv6" {
  description = "Public IPv6 address of the web server."
  value       = digitalocean_droplet.web.ipv6_address
}

output "ssh_command" {
  description = "How to log into the server as the deploy user."
  value       = "ssh -i ~/.ssh/do_travel_agency deploy@${digitalocean_droplet.web.ipv4_address}"
}
