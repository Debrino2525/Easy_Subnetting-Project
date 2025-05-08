#!/usr/bin/env python3

# Subnetting Calculator Script
# Created by RICHARD KWAME APPIAH

import sys
import ipaddress # Import the ipaddress module for network calculations

def display_author():
  """Displays the author's name."""
  print("----------------------------------------")
  print("Subnetting Calculator Script")
  print("Created by RICHARD KWAME APPIAH")
  print("----------------------------------------")
  print("") # Add a blank line for better readability

def calculate_subnet_info(ip_with_mask):
  """
  Calculates and displays subnet information for a given IP address with mask.

  Args:
    ip_with_mask: A string representing the IP address with its mask,
                  e.g., '192.168.1.0/24' (CIDR notation)
                  or '192.168.1.10/255.255.255.0' (IP with subnet mask).
  """
  try:
    # Use ipaddress.ip_network() to parse the IP and mask.
    # strict=False allows both CIDR ('/24') and dotted-decimal mask ('/255.255.255.0')
    # as well as host addresses within the network.
    network = ipaddress.ip_network(ip_with_mask, strict=False)

    print(f"Input Network/IP: {ip_with_mask}")
    print(f"Network Address:    {network.network_address}")
    print(f"Subnet Mask:        {network.netmask}")
    print(f"Broadcast Address:  {network.broadcast_address}")
    # network.num_addresses includes the network and broadcast addresses.
    # Usable hosts are total addresses - network - broadcast.
    print(f"Number of Hosts:    {network.num_addresses}")
    print(f"Usable Hosts:       {network.num_usable_hosts}")
    print(f"CIDR Notation:      /{network.prefixlen}")
    print("") # Add a blank line

  except ValueError as e:
    print(f"Error: Invalid IP address or mask format. {e}")
    print("Please provide input in the format 'IP_ADDRESS/MASK',")
    print("e.g., '192.168.1.0/24' or '192.168.1.10/255.255.255.0'")
    print("") # Add a blank line

# This block runs when the script is executed
if __name__ == "__main__":
  display_author() # Display the author's name first

  # Check if an argument (the IP/mask) was provided
  if len(sys.argv) > 1:
    ip_input = sys.argv[1] # Get the first command-line argument
    calculate_subnet_info(ip_input)
  else:
    print("Usage: ./subnet_calculator.py <IP_ADDRESS/MASK>")
    print("Example: ./subnet_calculator.py 192.168.1.0/24")
    print("Example: ./subnet_calculator.py 10.0.0.10/255.255.0.0")
    print("") # Add a blank line

