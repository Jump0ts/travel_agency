variable "project_name" {
  description = "Prefix used to name every resource."
  type        = string
  default     = "travel-agency"
}

variable "region" {
  description = "DigitalOcean region (fra1 = Frankfurt, the closest low-latency option to Spain)."
  type        = string
  default     = "fra1"
}

variable "droplet_size" {
  description = "Droplet plan. 1 GB RAM is enough because images are built in CI, not on the server."
  type        = string
  default     = "s-1vcpu-1gb"
}

variable "droplet_image" {
  description = "Base operating system image."
  type        = string
  default     = "ubuntu-24-04-x64"
}

variable "ssh_public_key_path" {
  description = "Public key of the admin SSH key pair used to log into the server."
  type        = string
  default     = "~/.ssh/do_travel_agency.pub"
}

variable "ci_ssh_public_key_path" {
  description = "Public key GitHub Actions uses to deploy (separate, passphrase-less key that can be revoked on its own)."
  type        = string
  default     = "~/.ssh/do_travel_agency_ci.pub"
}

variable "admin_ssh_cidrs" {
  description = "IP ranges allowed to reach SSH (port 22). GitHub Actions deploys over SSH, so it stays open; access is key-only."
  type        = list(string)
  default     = ["0.0.0.0/0", "::/0"]
}
