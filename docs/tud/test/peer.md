---
title: Peer
sidebar_position: 2
---

# Test Peer

If you want to test the peers functionality, run at least two peers in your network.
When testing with multiple devices, make sure to open the ports in your firewall.

Run peers with the following command:

```Bash
nix run github:Sobottasgithub/tud#peer -- --interface YOURINTERFACE -p YOURPORT
```

If everything works as intended you will see the IP addresses of the other peers.

# Source

You can find the source code of the test implementation here: [TUD/test/peer](https://github.com/Sobottasgithub/TUD/tree/main/test/peer)
