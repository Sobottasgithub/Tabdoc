---
title: tablog.h
sidebar_position: 1
---

# Tablog

The logging core of Tablog. This is everything you need to get started with logging.
Just create an instance, configure it if you like to and start logging to the console.

## Guide

Learn how to use the logger below, or jump straight to the complete list of exposed functions [here](#function-overview).

### Include

Include Tablog:

```cpp
#include <tablog.h>
```

### Create instance

It is recommended to create the instance of tablog as a [shared pointer](https://en.cppreference.com/cpp/memory/shared_ptr).
That has multiple advantages. One of them is that the registry works with shared pointers.

Create the tablog instance using the following code:

```cpp
std::shared_ptr<tablog::Tablog> logger = std::make_shared<tablog::Tablog>();
```

:::info

Make sure to include `<memory>` in order to use the `shared_ptr`

```cpp
#include <memory>
```

:::

### Configure

To configure the logger, you can use the configure function directly.
When configuring, you do not need to provide every argument that is listed [here](#configure-1), only
the name is required. To get started you can use the following code below:

```cpp
logger->configure("Test");
```

### Configure with TOML

When you want to configure multiple things, it is recommended to use a config TOML.
You can use the toml below and change the config to fit your needs. Only the default
section is required. You do not need to configure every loglevel.

```toml
[default]
name = "TablogTomlConfig"
displayName = true
displayTimestamp = true
displayColor = true

storeLogs = false
logsDirectory = ""

[loglevel]
  [[debug]]
  color = "32m"
  visible = true

  [[info]]
  color = "36m"
  visible = true

  [[warning]]
  color = "93m"
  visible = true

  [[error]]
  color = "41;30m"
  visible = true

  [[critical]]
  color = "95m"
  visible = true
```

When you are done configuring your TOML, you can provide it to your logger using
the following function:

```cpp
logger->configureWithToml("/path/to/your/toml.toml");
```

### Log to the console

To log to the console, use the provided log function:

```cpp
logger->log(tablog::DEBUG, "Test");
```

You can find all provided loglevels [here](#loglevel).

### Close logs

If you configured your logger to store the log files you have to close it before you terminate
your application, even though the log output is directly streamed into the file.

Use the code below to close the logger:

```cpp
logger->closeLogs();
```

## Function overview

### Loglevel

```cpp
enum LogLevel { DEBUG, INFO, WARNING, ERROR, CRITICAL };
```

### Tablog

:::info

The Tablog class is part of the tablog namespace

:::

### Constructor

```cpp
Tablog() {};
```

### LoglevelConfig

```cpp
struct LoglevelConfig {
  std::string color = "";
  bool visible = true;
};
```

### configureWithToml

```cpp
void configureWithToml(std::string configPath);
```

### configure

```cpp
void configure(std::string name,
              std::optional<bool> displayName = true,
              std::optional<bool> displayTimestamp = true,
              std::optional<bool> displayColor = true,
              std::optional<bool> storeLogs = false,
              std::optional<std::string> logsDirectory = "",
              std::optional<LoglevelConfig> debug = std::nullopt,
              std::optional<LoglevelConfig> info = std::nullopt,
              std::optional<LoglevelConfig> warning = std::nullopt,
              std::optional<LoglevelConfig> error = std::nullopt,
              std::optional<LoglevelConfig> critical = std::nullopt
            );
```

### log

```cpp
void log(LogLevel loglevel, const std::string& message);
```

### closeLogs

```cpp
void closeLogs();
```

## Source

Github: [tablog.h](https://github.com/Sobottasgithub/Tablog/blob/main/lib/tablog/include/tablog.h)
