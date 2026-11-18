---
title: Introduction
sidebar_position: 2
---

# Introduction

Tablog is a fast, user-friendly, and thread-safely logging library written in C++ 20 powered by Nix.
It offers log levels that are ready to use immediately, without any additional setup.
The generated log data can be saved to a file. If you wish to customize the log output,
Tablog can be configured either via a TOML file or by using a function.

Tablog consists of 2 key components:

1. tablog.h

   This is the logging core of Tablog. If you include this file, you have everything to get started.
   Just create a Tablog instance and you are already able to log thread-safe to the console.
   You can find the detailed information about all functions `tablog.h` provides [here](./modules/tablog.md).

2. tablog_registry.h

   If you would like to share a logger instance across multiple threads without passing the instance or a
   pointer of the instance to every thread or function, you can use the registry to handle that job for you.
   You check in your logger instance once and use that instance anywhere. You can find the detailed information
   about all the functions `tablog_registry.h` provides [here](./modules/tablog_registry.md).

## What are the benefits of using Tablog?

Tablog is native to Nix and CMake, which allows easy integration into other Nix projects. In addition, it is
fast lightweight and reliable across multiple threads which proves exceptionally useful in projects focused
on efficiency.
