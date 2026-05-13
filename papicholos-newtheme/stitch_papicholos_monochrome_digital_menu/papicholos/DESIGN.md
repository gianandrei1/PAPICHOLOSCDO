---
name: Papicholos
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#2f3131'
  tertiary-container: '#e2e2e2'
  on-tertiary-container: '#636565'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 4px
  margin-mobile: 20px
  gutter-bento: 12px
  stack-lg: 48px
  stack-md: 24px
---

## Brand & Style

This design system establishes an elite, editorial presence for Papicholos, positioning the digital menu as a high-fashion lookbook for gastronomy. The aesthetic prioritizes structural integrity and high-contrast visuals, stripping away decorative elements to let photography and bold typography command attention. 

The brand evokes the feeling of a premium social media feed—fast, immersive, and visually driven—while maintaining the sophisticated restraint of a contemporary art gallery. By utilizing a strictly monochromatic palette and sharp-edged geometry, the UI creates an architectural framework that feels intentional and high-end.

## Colors

The palette is strictly binary to enforce a premium, high-contrast environment. Deep black (`#000000`) serves as the canvas, ensuring that food photography appears vivid and pops from the screen. 

- **Primary White:** Reserved for high-impact headers, critical information, and active states.
- **Grayscale Accents:** Used sparingly for secondary descriptions (`#888888`) and structural borders (`#262626`).
- **Surface Tiers:** Subtle shifts to dark charcoal (`#080808` or `#1A1A1A`) are used to differentiate bento tiles from the main background without relying on shadows.

## Typography

Typography is the primary driver of the "Editorial" feel. We use **Montserrat** for all headlines to provide a heavy, geometric, and expensive-looking weight. Large font sizes with tight letter-spacing are encouraged for food titles.

**Inter** provides the functional balance, used for descriptions and prices where legibility is paramount. The use of uppercase labels with wide tracking (letter-spacing) should be applied to categories and metadata (e.g., "VEGAN" or "SPICY") to maintain the fashion-magazine aesthetic.

## Layout & Spacing

The layout follows a strict mobile-first vertical scroll. 

1.  **Bento Grid:** Category navigation utilizes a 2-column bento grid pattern. These square tiles use uniform gutters to create a structured, mosaic-like entry point to the menu.
2.  **Full-Width Cards:** Individual menu items are displayed as full-bleed or full-width vertical cards. This mimics the aspect ratio of social media stories, prioritizing tall, vertical imagery.
3.  **Whitespace:** Large vertical gaps (`stack-lg`) are used between sections to provide breathing room and signal the transition between courses or categories.

## Elevation & Depth

Depth is achieved through tonal contrast and strict outlines, never through drop shadows.

- **Level 0 (Background):** Pure `#000000`.
- **Level 1 (Bento Tiles/Cards):** A subtle lift to `#0A0A0A` with a 1px solid border of `#262626`.
- **Level 2 (Active/Overlay):** Elements that require immediate attention use a pure `#FFFFFF` background with black text to "pop" forward in the Z-space.
- **Backdrop Blurs:** For modal overlays (e.g., item details), use a high-saturation background blur (30px+) over a semi-transparent black to maintain context while focusing the user.

## Shapes

This design system utilizes a **Sharp (0)** roundedness philosophy. Every container, button, and image must have 90-degree corners. This reinforces the architectural and modern-minimalist aesthetic, distinguishing it from the generic rounded corners of standard mobile apps. Lines should be thin (1px) and crisp.

## Components

- **Bento Tiles:** Square aspect ratio, featuring a centered category name in `label-caps` over a darkened image or solid `#0A0A0A` background.
- **Vertical Food Cards:** Full-width imagery with typography overlaid at the bottom. Use a subtle linear gradient (Black to Transparent) at the base of images to ensure white text remains legible.
- **CTA Buttons:** Rectangular, sharp corners. Primary buttons are white with black text; secondary buttons are black with a 1px white border.
- **Status Chips:** Small, rectangular labels (e.g., "NEW", "GF") using `label-caps` typography. They should be styled as white text on a `#1A1A1A` background.
- **Price Indicators:** Displayed in a bold weight of the headline font, positioned as a floating element or right-aligned to the food name. No currency symbols—use decimals for a cleaner, editorial look (e.g., "24.0").
- **Quantity Toggles:** Minimalist +/- controls using thin 1px lines, avoiding circular or pill-shaped enclosures.