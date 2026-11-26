---
title: Test Client
sidebar_position: 1
---

# Test Client

The TTP2 TCP test client is used to test the functionality of `client_session_controller.h`. If you are testing across multiple devices, make sure to open the TCP ports you intend to use in your firewall.

To test the TCP test client, you need to run an instances of the test client as well as the [test server](./server.md).
To set up the test client after setting up the test server, follow the guide below.

1. Run the client using the following Nix command:

   ```Bash
   nix run github:Sobottasgithub/ttp2#client
   ```

2. Enter your IPv4 address.

3. Enter your network port.

Done!

# Client CLI Options

Choose an option:

## (0) Exit

This option terminates the client.

## (1) Send message

This option implements the standard packet.

## (2) Read messages

This option displays all received packets.

## (3) Benchmark

This option asks you to provide a standard packet size in bytes as well as a duration
in seconds. Then it benchmarks the speed of TTP2 between the server and client. A packet
counts as received as soon as it is received by the client again. The packet is sent to the
server and then returned by the server to the client.

## (4) Open file

This option tests the file packet.

## (5) peek index

This option lets you see the content of a packet that is further back in
the queue. You need to provide an index.

## (6) Viewport

This option tests the viewport packet.

## (7) TqlQuery

This option tests the TqlQuery packet.

## (8) Error

This option tests the error packet.

## (9) TDFS

### (0) Back

This option exits the TDFS menu.

### (1) Ls

This option tests the ls packet.

### (2) Ls Solution

This option tests the ls solution packet.

### (3) CopyFromLocal

This option tests the CopyFromLocal packet. It has the same content
as the file packet.
