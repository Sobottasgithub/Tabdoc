---
title: Code
sidebar_position: 1
---

# Code
The Tablo ecosystem is written in C++ 20.

## Variables
Variables are named using [`Camel Case`](https://en.wikipedia.org/wiki/Camel_case). Choose variable names that are intuitively understandable.
It is better to opt for an explicit, longer variable name than for one that only becomes clear through the context of the code. 
For class-level variables, use the ```this->``` keyword (e.g., ```this->myVariableName```).

## Files
Files are named using [`Snake Case`](https://en.wikipedia.org/wiki/Snake_case).
This makes the filenames easier to read and helps distinguish them from variable names (e.g., ```my_new_file.cpp```).

## Folders
Try to name folders using a single word. If that is not possible, use [`Camel Case`](https://en.wikipedia.org/wiki/Camel_case) for the folder names.
When several files clearly belong together, group them into a single folder to ensure the structure is intuitively understandable. (e.g., ```folder```, ```myFolder```)
