---
title: tablog_registry.h
sidebar_position: 2
---

# Tablog registry

If you would like to share a logger instance with other threads or objects without passing the logger instance,
you can use the Tablog registry to handle that job for you. Check in once - use anywhere.

## Guide

Learn how to use the registry below, or jump straight to the complete list of exposed functions [here](#function-overview).

### Include

Include the Tablog registry:

```cpp
#include <tablog_registry.h>
```

### Registry instance

To register a logger instance you need to get an instance of the registry first. The registry is implemented
as a [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern). This means your whole project will share
the same instance of the registry without any additional setup work.

To get a registry instance, use the following code:

```cpp
tablog::TablogRegistry* registry = &tablog::TablogRegistry::getInstance();
```

:::info

Tablog (`tablog.h`) is not implemented as a Singleton to give you the possibility to have multiple different
loggers with different configurations.

:::

### Register a logger instance

If you have already created a logger instance and got an instance of the registry, you can register the logger
with the following:

```cpp
registry->registerLogger("logger", loggerInstance);
```

The first parameter is the name under which your logger is registered. You will need that name when you want to get the
instance. The second parameter is the actual instance of your configured logger.

### Get a logger instance

To get a logger instance you have already registered somewhere else, use the following code:

```cpp
std::shared_ptr<tablog::Tablog> loggerInstance = registry->get("logger");
```

The first parameter is the name of your logger instance you have put in as the first parameter when registering it.

## Function overview

### Get Registry instance

```cpp
static TablogRegistry& getInstance();
```

### Register Tablog instance

```cpp
void registerLogger(const std::string& key, std::shared_ptr<Tablog> tablogInstance);
```

### Get Tablog instance

```cpp
std::shared_ptr<Tablog> get(std::string key);
```

## Source

Github: [tablog_registry.h](https://github.com/Sobottasgithub/Tablog/blob/main/lib/tablog/include/tablog_registry.h)
