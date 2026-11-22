---
title: Install
sidebar_position: 3
---

# TTP2 Install

Tablo Transfer Protocol 2 can be used in Nix projects that support `x86_64-linux`. It is written in C++ 20 and is build with
CMake.

To install the latest version of TTP2, follow these instructions:

1. Add TTP2 to your Nix flakes inputs:

    ```cpp
    ttp2.url = "github:Sobottasgithub/ttp2";
    ```

2. Add TTP2 to your Nix flake build inputs.

3. Link the library in your CMake project.

    ```cpp
    target_link_libraries(YourProject PUBLIC ttp2)
    ```

:::info
**Dependency Notice:** TTP2 currently relies on Apache Arrow for CSV file handling. While this will be replaced by a native implementation in a future release, you must currently link against the library. 

Follow the setup instructions for [arrow-cpp](https://search.nixos.org/packages?channel=unstable&query=arrow-cpp#show=arrow-cpp).
:::

Done!

# Udpate

To update TTP2 to the latest version, run the following command:

```Bash
nix flake update ttp2
```
