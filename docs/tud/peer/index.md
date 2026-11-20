---
title: Peer
sidebar_position: 1
---

# Peer UDP Discovery

Discover peers in your project using broadcast. Peer discovery works reliably with minimal setup without cutting corners at essential functions.

## Guide

Learn how to use peer discovery below, or jump straight to the complete list of exposed functions [here](#function-overview).

### Include

Include Peer UDP Discovery:

```cpp
#include <peer_discovery.h>
```

This already gives you all the functions you would expect from UDP discovery.

### Create Instance

Create an instance of `PeerDiscovery`. Pass your interface as the first parameter and
your UDP port as the second parameter. You do not need to create the instance as a `std::shared_ptr`
but it is recommended due to using it in a lambda later.

```cpp
auto peerDiscovery = std::make_shared<tud::PeerDiscovery>(INTERFACE, PORT);
```

:::info

Make sure to include `<memory>` when creating the `shared_ptr`.

```cpp
#include <memory>
```

:::

### Create Discovery Session

Create a discovery session in a new thread after creating the `PeerDiscovery` instance.

```cpp
std::thread peerDiscoveryThread([peerDiscovery]() {
  peerDiscovery->discoveryCycle();
});
```

:::info

Make sure to include `<thread>`.

```cpp
#include <thread>
```

:::

Done! Now udp discovery is set up. You can start retrieving the discovered data with the functions found below.

## Function overview

### Constructor

```cpp
PeerDiscovery(std::string interface, int port);
```

### Discovery Cycle

```cpp
void discoveryCycle();
```

### Get discovered addresses

```cpp
std::vector<std::string> getDiscoveredAddresses();
```

### Get discovered addresses

It is possible to run multiple peers on the same device. With this function
you can retrieve the unique identifiers of each unique peer.

```cpp
std::vector<std::string> getDiscoveredIdentifiers();
```

### Get discovered peers

```cpp
std::map<std::string, std::string> getDiscoveredPeers();
```

### Remove discovered address

If a node shuts down you can remove it from the list of discovered peers.

```cpp
void removeDiscoveredAddress(std::string address);
```

### IsConnected

```cpp
bool isConnected();
```

### Disconnect

```cpp
void disconnect();
```

## Source

Github: [peer_discovery.h](https://github.com/Sobottasgithub/TUD/blob/main/lib/tud/include/peer_discovery.h)
