---
title: Corporate Identity
sidebar_position: 2
---

# Corporate Identity

Tablo's visual identity is blue. The anchor is the blue in the logo
(`static/img/logo.svg`); everything else on this page is derived from it, so the
docs site, the logo, and anything else carrying the Tablo name read as one
system.

The palette lives in [`src/css/custom.css`](https://github.com/Sobottasgithub/Tabdoc/blob/master/src/css/custom.css)
as CSS custom properties. Use the tokens — never a raw hex value — so a future
change to the identity only has to happen in one place.

## Brand anchor

| Token          | Light     | Dark      | Use                                         |
| -------------- | --------- | --------- | ------------------------------------------- |
| `--tablo-blue` | `#1122FF` | `#4D5CFF` | Logo, brand marks, deliberate brand accents |
| `--tablo-ink`  | `#0B1030` | `#E6E9F5` | Deep brand-tinted text and shadows          |

`--tablo-blue` is the identity, not a UI colour. It is fully saturated and
vibrates when used for large fills or long runs of text. Reserve it for the mark
itself and for small, intentional accents.

## UI primary

The interface uses a tempered version of the brand blue — the same hue (234°),
pulled back in lightness so buttons, links, and filled areas sit comfortably on
a page. This is the standard Infima primary ramp, so Docusaurus picks it up
everywhere automatically.

| Token                          | Light     | Dark      |
| ------------------------------ | --------- | --------- |
| `--ifm-color-primary-darkest`  | `#1220A1` | `#3347FF` |
| `--ifm-color-primary-darker`   | `#1527C1` | `#6171FF` |
| `--ifm-color-primary-dark`     | `#1729CF` | `#707EFF` |
| `--ifm-color-primary`          | `#1B2FE6` | `#8A95FF` |
| `--ifm-color-primary-light`    | `#3043E8` | `#9EA8FF` |
| `--ifm-color-primary-lighter`  | `#3E4FEA` | `#ADB6FF` |
| `--ifm-color-primary-lightest` | `#6C79EF` | `#CCD1FF` |

Light mode flips the ramp relative to dark mode on purpose: on a white page the
primary must be _darker_ than the background to stay readable, on a dark page it
must be _lighter_. Both directions clear WCAG AA for body text — `#1B2FE6` on
white is 8.1:1, `#8A95FF` on the dark background is 6.4:1.

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

## Rules

- Blue carries the brand. Reach for the primary ramp first.
- Never hardcode a hex value in a component or page — use a token.
- A new accent colour needs a semantic reason, not an aesthetic one. If it is
  just decoration, use the blue ramp.
- Every colour pair must clear WCAG AA (4.5:1 for body text, 3:1 for large text
  and UI borders) in **both** light and dark mode. Check before committing.
- Keep the two themes in sync: anything added to `:root` needs a
  `[data-theme='dark']` counterpart.
