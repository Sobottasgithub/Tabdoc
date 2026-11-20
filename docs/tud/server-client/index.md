---
title: Server-Client
sidebar_position: 1
---

# Server-Client Discovery

Tablo UDP server-client discovery is used with network participants that have a clear
hierarchy. This means clients are only able to discover servers and servers are only able
to discovery clients. In comparison to Peer discovery, there is less traffic on the broadcast channel
due to the clear, distinct roles. The core principle of server-client discovery is that the
server broadcasts and the client receives and sends its IP address back to the server.

Both classes are derived from `networking.h` and have therefore a very simular api.
The paragraphs below will introduce you to the functionality and guide you through the
setup of the client and server.

## Guide

Learn how to use server-client discovery below, or jump straight to the complete list of exposed functions [here](#function-overview).

### Client

#### Include

Include the TUD client with the following code:

```cpp
#include "client_discovery.h"
```

This already gives you all the functions you would expect from the UDP discovery client.

#### Create Instance

```cpp
auto clientDiscovery = std::make_shared<tud::ClientDiscovery>(INTERFACE, BROADCASTPORT, RETURNPORT, "yourNewIdenifier");
```

The broadcast and return port can be the same but can also be different. The identifier is optional.

:::info

Make sure to include `<memory>` when creating the `shared_ptr`.

```cpp
#include <memory>
```

:::

#### Create Discovery Session

Create a discovery session in a new thread after creating the `ClientDiscovery` instance.

```cpp
std::thread clientDiscoveryThread([clientDiscovery]() {
  clientDiscovery->discoveryCycle();
});
```

:::info

Make sure to include `<thread>`.

```cpp
#include <thread>
```

:::

Done! Now client UDP discovery is set up. Now the client is ready to use with the
[general functions](#general). Do not forget to implement the server. The server setup
is almost the same.

### Server

#### Include

Include the TUD server with the following code:

```cpp
#include "server_discovery.h"
```

This already gives you all the functions you would expect from the UDP discovery server.

#### Create Instance

```cpp
auto serverDiscovery = std::make_shared<tud::ServerDiscovery>(INTERFACE, BROADCASTPORT, RETURNPORT, "yourNewIdenifier");
```

The broadcast and return port can be the same but can also be different. The identifier is optional.

:::info

Make sure to include `<memory>` when creating the `shared_ptr`.

```cpp
#include <memory>
```

:::

#### Create Discovery Session

Create a discovery session in a new thread after creating the `ServerDiscovery` instance.

```cpp
std::thread serverDiscoveryThread([serverDiscovery]() {
  serverDiscovery->discoveryCycle();
});
```

:::info

Make sure to include `<thread>`.

```cpp
#include <thread>
```

:::

Done! Now server UDP discovery is set up. Look at the api functions to retreive
discovered addresses

## Function overview

### Client exclusiv

#### Constructor

```cpp
ClientDiscovery(std::string interface, int inPort, int outPort, std::optional<std::string> identifier);
```

#### Discovery cylce

```cpp
void discoveryCycle();
```

### Server exclusiv

#### Constructor

```cpp
ServerDiscovery(std::string interface, int inPort, int outPort, std::optional<std::string> identifier);
```

#### Discovery cylce

```cpp
void discoveryCycle();
```

### General

`ServerDiscovery` and `ClientDiscovery` are both derived from `networking.h`. This means both modules
can be used with these functions.

#### GetDiscoveredAddresses

```cpp
std::vector<std::string> getDiscoveredAddresses();
```

#### RemoveDiscoveredAddress

If a server or client shut down you can remove it with this function.

```cpp
void removeDiscoveredAddress(std::string address);
```

#### IsConnected

```cpp
bool isConnected();
```

#### Disconnect

```cpp
void disconnect();
```

### Helper functions

#### GetLocalIpAddress

```cpp
static std::string getLocalIpAddress(std::string interface);
```

#### GetBroadcastIpAddress

```cpp
static std::string getBroadcastIpAddress();
```

#### IsValidIpV4

```cpp
static bool isValidIpV4(std::string &ipString);
```
