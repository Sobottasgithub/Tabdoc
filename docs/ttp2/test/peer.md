---
title: Test Peer
sidebar_position: 3
---

# Test Peer

The TTP2 UDP test peer is used to test the functionality of `peer_session_controller.h`. If you are testing across multiple devices, make sure to open the UDP ports you intend to use in your firewall.

To test the UDP test peer, you need to run two instances of it. Follow the guide below.

1. Run the peer using the following Nix command:

   ```Bash
   nix run github:Sobottasgithub/ttp2#peer
   ```

2. Enter your IPv4 address.

3. Enter your network port.

Repeat the same steps for the second instance.

:::info

The `peer_session_controller.h` uses two UDP ports for communication. The port you enter is used for receiving packets, while the next port (the entered port + 1) is used for sending packets.

When starting the second instance on the same device, make sure not to bind it to the sending port of the first instance.

:::

Done!

# Peer CLI Options

## (0) Exit

This option terminates the peer.

## (1) Send

This option prompts you to enter the receiver's IP address and port. After providing the peer information, you will be asked to enter a message.

## (2) Receive

This option displays all received packets.

## (3) Benchmark

### (0) Exit

This option exits the benchmark.

### (1) Sender

This option prompts you to enter the peer information of an instance running in returner mode. You will then be asked to provide a payload size in bytes and a duration in seconds.

### (2) Returner

The returner sends back the packets received from the sender. It functions similarly to a TCP test server.

# Source

You can find the source code for the test implementation here: [TTP2/test/peer](https://github.com/Sobottasgithub/TTP2/tree/main/test/peer)
