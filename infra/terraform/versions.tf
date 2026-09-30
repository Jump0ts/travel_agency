terraform {
  required_version = ">= 1.6"

  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.40"
    }
  }
}

# The API token is read from the DIGITALOCEAN_TOKEN environment variable,
# so it never appears in code or in version control.
provider "digitalocean" {}
