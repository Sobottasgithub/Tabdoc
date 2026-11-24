---
title: Test Server
sidebar_position: 1
---

# Test Server

The TTP2 TCP test servers sole purpose is to return packets that are sent by the test client. However, it is essential
for testing the functionality of the test client. If you are testing across multiple devices make sure to open the TCP ports you
use in the firewall. To test the TCP test server you only need to run a single Nix command.

1. Run the server with the following command:

   ```Bash
   nix run github:Sobottasgithub/ttp2#server
   ```

2. Enter your network interface

3. Enter your network port

Done!

Now the server is ready to be tested using the client.

# Source

You can find the source code of the server test implementation here: [TTP2/test/server](https://github.com/Sobottasgithub/TTP2/tree/main/test/server)
