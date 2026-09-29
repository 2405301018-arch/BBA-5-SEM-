---
name: Cozy Chaos
colors:
  surface: '#fff8ef'
  surface-dim: '#e1d9cb'
  surface-bright: '#fff8ef'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e4'
  surface-container: '#f5edde'
  surface-container-high: '#efe7d9'
  surface-container-highest: '#e9e2d3'
  on-surface: '#1e1b13'
  on-surface-variant: '#55433d'
  inverse-surface: '#343026'
  inverse-on-surface: '#f8f0e1'
  outline: '#88726c'
  outline-variant: '#dac1ba'
  surface-tint: '#96472d'
  primary: '#93452b'
  on-primary: '#ffffff'
  primary-container: '#b25d41'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59e'
  secondary: '#6f5d0e'
  on-secondary: '#ffffff'
  secondary-container: '#f8de84'
  on-secondary-container: '#746113'
  tertiary: '#4c6244'
  on-tertiary: '#ffffff'
  tertiary-container: '#657b5b'
  on-tertiary-container: '#f8ffef'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#ffb59e'
  on-primary-fixed: '#3a0b00'
  on-primary-fixed-variant: '#783119'
  secondary-fixed: '#fbe187'
  secondary-fixed-dim: '#dec56e'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#d1eac4'
  tertiary-fixed-dim: '#b5cea9'
  on-tertiary-fixed: '#0d2008'
  on-tertiary-fixed-variant: '#384c30'
  background: '#fff8ef'
  on-background: '#1e1b13'
  surface-variant: '#e9e2d3'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  sticker-label:
    fontFamily: Bricolage Grotesque
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 16px
  stack-gap: 12px
---

## Brand & Style

The design system is built on a "Digital Scrapbook" aesthetic, blending the warmth of a physical journal with the irony and energy of Gen Z digital culture. It targets users looking for a playful, low-stakes way to navigate social obligations. The interface should feel personal, curated, and intentionally "perfectly messy."

The style leverages **Tactile Minimalism** mixed with **Soft Brutalism**. It uses heavy, sticker-like shadows and paper textures to create a tangible feel, while maintaining a clear, readable structure. The emotional response is one of comfort, humor, and approachability—like a shared joke between friends.

## Colors

The palette is rooted in a warm, "Cottagecore-meets-Internet" spectrum. 

- **Primary (Terracotta):** Used for main actions and brand presence.
- **Background (Cream):** A soft, non-white canvas that reduces eye strain and reinforces the paper aesthetic.
- **Accents:** A variety of "sticker" colors (Butter, Sage, Lavender, Pink) used interchangeably for category tags, floating elements, and secondary highlights.
- **Text (Chocolate):** Low-contrast compared to pure black, maintaining the cozy, organic feel.

Use subtle film grain overlays (opacity 3-5%) on background surfaces to break the digital flatness.

## Typography

This design system uses a hierarchical mix of high-character fonts.

- **Headlines:** Plus Jakarta Sans provides a friendly, rounded geometric structure. Use tight letter-spacing for large display text to create a "blocky" impact.
- **Body:** Inter ensures maximum readability for generated excuses and descriptions.
- **Accents/Stickers:** Bricolage Grotesque (substituted for a playful, quirky feel) is used for labels that look like physical tape or stickers.

All headings should favor sentence-case to maintain a casual tone. Use "typewriter" animations for generated excuse text to emphasize the "generating" process.

## Layout & Spacing

The layout follows a **loose grid** philosophy. While elements are aligned to a 4px baseline, individual components should occasionally feature 1-3 degree rotations to mimic stickers placed by hand.

- **Mobile:** Single column with wide margins (24px) to allow "floating" decorative elements in the gutters.
- **Desktop:** Centered fixed-width "Notebook" container (max-width: 800px) to maintain the personal, intimate feel of a journal.
- **Depth:** Use overlapping elements. Components should not always sit side-by-side; they should "stack" slightly.

## Elevation & Depth

This design system rejects traditional soft blurs in favor of **"Sticker Shadows"**.

- **Hard Shadows:** Use offsets of `4px 4px 0px` with 100% opacity in a slightly darker shade of the background or the primary Chocolate Brown.
- **Lift:** When an element is hovered, the shadow should grow (`8px 8px 0px`) and the element should translate `(-2px, -2px)` to simulate "peeling" off the page.
- **Layers:** Use z-index to overlap "sticky notes" and "tape" over the main content areas.

## Shapes

The shape language is extremely soft and organic.

- **Primary Components:** Use a 24px (1.5rem) radius for cards and main buttons.
- **Small Elements:** Use full "pill" shapes for tags and chips.
- **Decorative Elements:** Occasionally use "wavy" or "blob" SVG paths for containers to enhance the chaotic, scrapbook feel.

## Components

### Buttons
Buttons are high-contrast "stickers." 
- **Primary:** Terracotta background, Chocolate border (2px), and a hard shadow. On click, they "squish" (scale 0.95).
- **Secondary:** White or Cream background with a colored border.

### Excuse Cards
The central component of the UI. Use a "paper" texture background, rounded-xl corners, and a slight rotation (-1 to +1 degrees). The text within should appear via a typewriter effect.

### Stickers & Chips
Used for categories (e.g., "Work," "Social," "Family"). These should have jagged "cut" edges or pill shapes and use the Accent palette.

### Input Fields
Inputs should look like hand-drawn boxes or underlined spaces on a notebook page. Focus states should trigger a "highlight" effect using the Butter Yellow accent.

### Micro-interactions
- **Wiggle:** Important CTA buttons should have a subtle 2-degree wiggle every few seconds.
- **Confetti:** Trigger a burst of "paper scrap" confetti when an excuse is successfully copied to the clipboard.
- **Haptic:** Use soft haptic feedback on mobile for all "sticker" interactions.