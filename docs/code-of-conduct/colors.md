---
title: Colors
sidebar_position: 2
---

# Colors

Tablos visual identity is blue.

View the color scheme is found in [`src/css/custom.css`](https://github.com/Sobottasgithub/Tabdoc/blob/master/src/css/custom.css)
as CSS custom properties.

## Brand anchor

| Token          | Light     | Dark      | Use                                         |
| -------------- | --------- | --------- | ------------------------------------------- |
| `--tablo-blue` | `#1122FF` | `#4D5CFF` | Logo, brand marks, deliberate brand accents |
| `--tablo-ink`  | `#0B1030` | `#E6E9F5` | Deep brand-tinted text and shadows          |

Do not use `--tablo-blue` to fill large spaces.

## UI primary

Tablos ui primary colors. -dark is used for darkmode. -light is used for light mode. Do not mix.

| Token                          | Light     | Dark      |
| ------------------------------ | --------- | --------- |
| `--ifm-color-primary-darkest`  | `#1220A1` | `#3347FF` |
| `--ifm-color-primary-darker`   | `#1527C1` | `#6171FF` |
| `--ifm-color-primary-dark`     | `#1729CF` | `#707EFF` |
| `--ifm-color-primary`          | `#1B2FE6` | `#8A95FF` |
| `--ifm-color-primary-light`    | `#3043E8` | `#9EA8FF` |
| `--ifm-color-primary-lighter`  | `#3E4FEA` | `#ADB6FF` |
| `--ifm-color-primary-lightest` | `#6C79EF` | `#CCD1FF` |

## Neutrals

Dark mode uses cool, blue-tinted neutrals rather than pure grey, so the greys
belong to the same family as the blue:

| Token                            | Dark      | Use                     |
| -------------------------------- | --------- | ----------------------- |
| `--ifm-background-color`         | `#0F1117` | Page background         |
| `--ifm-background-surface-color` | `#171A24` | Cards, tooltips, navbar |

Light mode keeps Infima's white page background. Shadows are tinted with
`--tablo-ink` instead of black, for the same reason.

## Status accents

These are **semantic**, not brand colours. They sit deliberately outside the
blue family so that "this is in progress" never gets confused with "this is a
link".

| Token              | Light     | Dark      | Meaning               |
| ------------------ | --------- | --------- | --------------------- |
| `--tablo-progress` | `#1F8F4A` | `#4ADE80` | Work in progress      |
| `--tablo-todo`     | `#9A6B1A` | `#E0B964` | Open task, incomplete |
| `--tablo-archived` | `#6B7384` | `#9AA3B5` | Archived, superseded  |

They back the three custom admonitions in `src/components/Admonitions/`. Each is
muted relative to a pure signal colour (`#1F8F4A`, not `#00A726`) so it reads as
a status marker next to the blue rather than competing with it.
