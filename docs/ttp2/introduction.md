---
title: Introduction
sidebar_position: 2
---

# Introduction

Any packet size, custom types, [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) or [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) -
[TTP2](https://github.com/Sobottasgithub/TTP2) moves data reliably and fast across your nodes with C++ and [Nix](https://nixos.org/download/) reproducibility.

The Tablo Transfer Protocol 2 ([TTP2](https://github.com/Sobottasgithub/TTP2)) transmits data packets of any size quickly and reliably. It is primarily designed for transferring large data packets between clients,
servers, and peers within Tablo and TDFS. To send packets via TCP, use `client_session_controller.h` and `server_session_controller.h`.
Both classes derive from `core/tcp_networking.h` to abstract functions that would otherwise need to be implemented twice. Furthermore,
this approach allows for the derivation of a new controller should the existing implementations not meet your specific API requirements.
For sending packets via UDP, use `peer_session_controller.h`. This class derives from `core/udp_networking.h` while hiding functions that are not part of the controller API,
providing you with the flexibility to create your own controller implementation if necessary. Both core components support the encoding and decoding of defined packet types
using [ASN.1](https://en.wikipedia.org/wiki/ASN.1). The packets consist of C++ structures with varying content, each assigned an id,
allowing the contents to be distinguished based on the packet name alone. The packets are encoded and decoded using ASN.1 for transmission as byte data over the network.

## TCP

The TCP network protocol is implemented in `core/tcp_networking.h` and uses ASN.1 for the encoding and decoding of packets. An overview of the available packet types
can be found [here](./packet-types/packet_types.md). To use `core/tcp_networking.h` without having to implement your own API controller, you can make use of the existing
controllers. Since TCP is a connection-oriented protocol, the controllers follow a clear server-client structure. This means that the `client_session_controller.h` connects
to the `server_session_controller.h`, which accepts incoming connections. Both controllers can freely send and receive data without the need for an acknowledgment packet.
Further information can be found under [Client Session Controller](./client_session_controller.md) and [Server Session Controller](./server_session_controller.md).

## UDP

The UDP network protocol is implemented in `core/udp_networking.h` and uses ASN.1 for the encoding and decoding of packets. An overview of the available packet types can be
found [here](./packet-types/packet_types.md). To use `core/udp_networking.h` without having to implement your own API controller, you can make use of the existing controller.
Since UDP is a connectionless protocol, there is only a single controller type, with no fixed server-client structure. This is particularly useful when implementing "peers":
for instance, a `peer_session_controller.h` can send packets to another `peer_session_controller.h` something that would not be possible via TCP.
For further information, please refer to [Peer Session Controller](./peer_session_controller.md).
