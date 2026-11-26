---
title: Packet Types
sidebar_position: 1
---

# Packet Types

The following package types are natively supported by TTP2.

A package is created in the following steps:

```cpp
struct Packet {
  int id = -1;
  payloadVariants payload;
};
```

The `payloadVariants` accept the following package types as well as TDFS package types.

## Standard

```cpp
struct Standard {
  std::string payload = "";
};
```

## File

```cpp
struct File {
  std::string filePath = "";
  unsigned int start = 0;
  unsigned int end = 0;
  std::shared_ptr<arrow::Table> payload = arrow::Table::Make(arrow::schema({}), std::vector<std::shared_ptr<arrow::Array>>{}, 0);
};
```

## ViewportRequest

```cpp
struct ViewportRequest {
  unsigned int xStart = 0;
  unsigned int xEnd = 0;
  unsigned int yStart = 0;
  unsigned int yEnd = 0;
};
```

## Viewport

```cpp
struct Viewport {
  unsigned int xStart = 0;
  unsigned int xEnd = 0;
  unsigned int yStart = 0;
  unsigned int yEnd = 0;
  std::shared_ptr<arrow::Table> payload = arrow::Table::Make(arrow::schema({}), std::vector<std::shared_ptr<arrow::Array>>{}, 0);
};
```

## TqlQuery

```cpp
struct TqlQuery {
  std::string query = "";
};
```

## Error

```cpp
struct Error {
  unsigned int code = 0;
  std::string message = "";
};
```

## Universal

With this packet you can send your own structs decoded to bytes

```cpp
struct Universal {
  int type;
  std::vector<uint8_t> bytes;
};
```
