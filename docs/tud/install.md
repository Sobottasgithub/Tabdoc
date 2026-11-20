---
title: Install
sidebar_position: 3
---

# TUD Install

Tablo UDP Discovery can be used in Nix projects that support `x86_64-linux`.

To install the latest version of Tablo UDP Discovery, follow these instructions:

1. Add TUD to your Nix flakes inputs:

   ```Nix
   tud.url = "github:Sobottasgithub/tud";
   ```

2. Add TUDto your Nix flake build inputs.

3. Link the library in your CMake project.

   ```CMake
   target_link_libraries(YourProject PUBLIC tud)
   ```

Done!

# Update

To update TUD to the latest version, run the following command:

```
nix flake update tud
```
