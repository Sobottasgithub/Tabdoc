---
title: Install
sidebar_position: 3
---

# Tablog Installation

Tablog can be used in Nix projects that support `x86_64-linux` or `aarch64-linux`.

To install the latest version of Tablog, follow these instructions:

1. Add Tablog to your Nix flakes inputs:

   ```Nix
   tablog.url = "github:Sobottasgithub/tablog"
   ```

2. Add Tablog to your Nix flake build inputs.

3. Link the library in your CMake project:

   ```CMake
   target_link_libraries(YourProject PUBLIC tablog)
   ```

Done!

## Update

To update Tablog to the latest version, run the following command:

```Bash
nix flake update tablog
```
