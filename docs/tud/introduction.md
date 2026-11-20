---
title: Introduction
sidebar_position: 2
---

# Introduction

Tablo UDP Discovery is used to discover peers, clients and servers on the same network.
It is written in C++ 20, powered by Nix and used in Tablo and TDFS. TUD works reliably with
minimal setup without cutting corners at essential functions. TUD provides UDP Discovery between
client and server as well as between multiple peers.

# Peer or Client - Server discovery?

If you are unsure whether to use peer or client - server discovery in your project read through
the following and decide after.

1. Peer

   The core principal of peer discovery is that there is no clear hierarchy between your network participants.
   This means that each peer broadcasts and receives the broadcast of other peers. The disadvantage is that you
   have more traffic on the broadcast.

2. Client - Server

   The core principle of client - server discovery is that the server broadcasts and the client receives and returns.
   This means there is less traffic on the broadcast. The disadvantage is that servers can not find other servers and clients
   can not find other clients.

# What are the benefits of using TUD?

TUD is native to Nix and CMake, which allows easy integration into other Nix projects. In addition, as already mentioned,
it is reliable, easy to set up and provides all essential functions you would expect.
