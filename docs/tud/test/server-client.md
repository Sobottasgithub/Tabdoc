---
title: Server - Client
sidebar_position: 1
---

# Test Server - Client

To test the Server and Client you only need to run two Nix commands. When testing with multiple devices,
make sure to open the ports in your firewall.

1. Run the client:

    ```Bash
    nix run github:Sobottasgithub/tud#client
    ```

    The client will ask you for your interface now. Provide the interface that is in the same network
    as your server.

2. Run the server:

    ```Bash
    nix run github:Sobottasgithub/tud#server
    ```

    The server will ask you for your interface now. Provide the interface that is in the same network
    as your client.

Done! If everything works, the client outputs the server's IP address and vice versa. 

# Source

You can find the client source code of the test implementation here: [TUD/test/client](https://github.com/Sobottasgithub/TUD/tree/main/test/client)

You can find the server source code of the test implementation here: [TUD/test/server](https://github.com/Sobottasgithub/TUD/tree/main/test/server)
