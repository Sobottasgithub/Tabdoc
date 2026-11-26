---
title: TDFS Packet Types
sidebar_position: 2
---

# TDFS Packet Types

The following packet types are implemented to support TDFS. They are natively supported by TTP2.
If you require similar types, you may use these.

## Ls

```cpp
struct Ls {
  std::string directory;
};
```

## LsSolution

```cpp
struct LsSolution {
  std::vector<std::string> content;
};
```

## CopyFromLocal

```cpp
struct CopyFromLocal {
  std::string filePath = "";
  unsigned int start = 0;
  unsigned int end = 0;
  std::shared_ptr<arrow::Table> payload = arrow::Table::Make(arrow::schema({}), std::vector<std::shared_ptr<arrow::Array>>{}, 0);
};
```
