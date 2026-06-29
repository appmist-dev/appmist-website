# DESIGN_SYSTEM.md

# Appmist UI Design System

Version: 1.0

This document defines the permanent UI and visual design system for the Appmist website and future Appmist product surfaces.

It exists to ensure every Appmist experience feels consistent, deliberate, lightweight, privacy-first, and trustworthy.

This is a UI design system.

It is not a coding guide.

It is not a brand strategy document.

Whenever design decisions are unclear, `APPMIST_RULES.md`, `PROJECT.md`, `TIMEUP_LOCK.md`, and `COPYWRITING.md` remain the source of truth.

---

# 1. Design Philosophy

Appmist should feel:

* Minimal
* Premium
* Modern
* Calm
* Trustworthy
* Friendly
* Privacy-first

The design should communicate confidence through restraint.

It should never feel loud, decorative for the sake of decoration, or overloaded with interface noise.

The user should feel:

* Safe
* Oriented
* Unrushed
* In control
* Able to understand the product quickly

Appmist experiences should look carefully designed, but not over-designed.

The right visual reference is the discipline of:

* Apple for clarity and polish
* Linear for precision and clean hierarchy
* Notion for calm readability
* Raycast for focused utility
* Nothing for restraint and modern confidence
* Google Material Design for practical usability

Appmist must avoid:

* Bootstrap look
* Generic SaaS templates
* WordPress theme styling
* AI-generated appearance
* Excessive gradients
* Oversized decorative blobs
* Trend-driven visual noise

Core principles:

* Simplicity over complexity
* Clarity over cleverness
* Trust over hype
* Usefulness over novelty
* Refinement over reinvention

---

# 2. Color System

The Appmist color system should be restrained and purposeful.

Blue is the main action color because it communicates trust and clarity.

Purple is an accent, not the dominant visual voice.

Cyan is used for highlight and light.

## Core Colors

Primary

* `#2563EB`
* Main CTA color, key interactive highlights, active states, core brand actions

Primary Hover

* `#1D4ED8`
* Hover and pressed emphasis for primary actions

Primary Gradient

* `linear blend from #2563EB to #1D4ED8`
* Use for hero CTA buttons, select emphasis surfaces, and important action moments

Accent

* `#7C3AED`
* Used sparingly for secondary emphasis, decorative glow, premium highlights, and layered gradients

Highlight

* `#22D3EE`
* Used for subtle light accents, badges, illustration glow, and section atmosphere

Success

* `#16A34A`
* Positive confirmations, trust indicators, status chips, success states

Warning

* `#D97706`
* Caution messaging, non-critical alerts, attention markers

Error

* `#DC2626`
* Error states, destructive signals, form validation, critical notices

Dark

* `#020617`
* Hero backgrounds, strong heading moments, footer accents, premium contrast surfaces

Surface

* `#FFFFFF`
* Cards, dialogs, floating UI, navigation on scroll, forms

Background

* `#F8FAFC`
* Default page background and soft canvas behind content

Text

* `#0F172A`
* Primary content, headings, critical UI text

Muted Text

* `#64748B`
* Secondary content, supporting details, metadata, quiet helper text

Border

* `#E5E7EB`
* Card edges, inputs, subtle component framing

Divider

* `#EDF2F7`
* Quiet section separators and low-contrast rule lines

Overlay

* `rgba(2, 6, 23, 0.56)`
* Modal backdrops, mobile nav overlay, focus isolation

Focus Ring

* `rgba(37, 99, 235, 0.32)`
* Keyboard focus states only

Glass Background

* `rgba(255, 255, 255, 0.72)`
* Frosted navigation, light glass cards, soft floating surfaces

Glass Border

* `rgba(255, 255, 255, 0.35)`
* Borders for glass surfaces only

## Usage Rules

* Primary blue should drive action, not decoration.
* Accent purple should never overpower the interface.
* Highlight cyan should be used as atmosphere, not as a competing brand color.
* Dark backgrounds should be reserved for hero, premium sections, or focused contrast moments.
* Most reading surfaces should remain light for clarity and trust.
* Error and warning colors should be rare and obvious.
* Borders should be subtle and never heavy-handed.

---

# 3. Typography

Typography should do a large part of the design work.

It should feel spacious, readable, and premium.

## Font Families

Heading

* `Sora`

Body

* `Manrope`

Mono

* `JetBrains Mono`

Fallbacks

* `Inter`
* `Segoe UI`
* `Arial`
* `sans-serif`
* `monospace` for mono fallback

## Font Weights

Heading Weights

* 600 for section titles
* 700 for major headings
* 800 for hero headlines when needed

Body Weights

* 400 for long-form body copy
* 500 for supportive UI text
* 600 for emphasis and labels
* 700 for buttons and stronger interface copy

Mono Weights

* 500 or 600 only

## Type Scale

### Desktop

* Hero Display: `64px`
* H1: `56px`
* H2: `40px`
* H3: `28px`
* H4: `22px`
* Large Body: `20px`
* Body: `18px`
* Small Body: `16px`
* Caption: `14px`
* Fine Print: `12px`

### Tablet

* Hero Display: `52px`
* H1: `44px`
* H2: `34px`
* H3: `26px`
* H4: `20px`
* Large Body: `18px`
* Body: `17px`
* Small Body: `16px`
* Caption: `14px`
* Fine Print: `12px`

### Mobile

* Hero Display: `40px`
* H1: `36px`
* H2: `30px`
* H3: `24px`
* H4: `20px`
* Large Body: `18px`
* Body: `16px`
* Small Body: `15px`
* Caption: `13px`
* Fine Print: `12px`

## Line Heights

* Hero and display text: `1.05` to `1.12`
* Headings: `1.1` to `1.2`
* Body copy: `1.6` to `1.75`
* Dense UI labels: `1.3` to `1.4`

## Letter Spacing

* Hero and major headings: `-0.03em`
* Standard headings: `-0.02em`
* Body copy: `0`
* Eyebrows and labels: `0.02em` to `0.04em`

## Usage Rules

* Never use tiny body text for main content.
* Keep paragraphs short and readable.
* Headlines should be bold but not shouty.
* Long copy should use Manrope, never Sora.
* Mono should be rare and reserved for technical labels, timestamps, or structured references.
* Heading hierarchy must always be visually obvious.

---

# 4. Spacing System

Appmist uses an 8-point spacing system with a few supporting values for tighter control.

## Spacing Scale

`4`

* Micro spacing inside icons, pills, tiny labels, and compact separators

`8`

* Tight spacing between related elements, small gaps in buttons, stacked metadata

`12`

* Small card internals, icon-to-label gaps, compact form spacing

`16`

* Default spacing between labels and inputs, standard paragraph rhythm, mobile UI padding

`24`

* Comfortable card padding, grouped button rows, section intro spacing

`32`

* Default spacing between content blocks inside a section

`40`

* Large card padding, substantial grouping, content-to-media separation

`48`

* Standard mobile section spacing and strong vertical separation

`64`

* Desktop section padding and major content breaks

`80`

* Large hero spacing and premium breathing room on desktop

`96`

* Major page intervals, top-level section separation

`128`

* Maximum landing page breathing room for hero-to-next-section transitions

## Usage Rules

* Spacing should feel generous, not sparse.
* Use fewer spacing values repeatedly rather than inventing custom gaps.
* Mobile spacing should remain compact but never cramped.
* Section spacing should establish rhythm without making users scroll through emptiness.

---

# 5. Border Radius

Rounded corners are part of the Appmist visual identity.

They should feel soft and modern, not playful or bubbly.

## Radius Scale

Small

* `8px`
* Small inputs, tiny badges, compact chips

Medium

* `12px`
* Standard inputs, small cards, UI controls

Large

* `18px`
* Feature cards, FAQ cards, standard content cards

XL

* `24px`
* Hero cards, screenshot frames, larger surfaces

Pill

* `999px`
* Buttons, rounded chips, status pills, nav highlights

Phone Mockup

* `32px` to `40px`
* Realistic Android device framing and screen masks

Cards

* Usually `18px` to `24px`

Buttons

* Usually pill radius

Dialogs

* `24px`

## Usage Rules

* Avoid mixing too many radius styles in the same view.
* Most Appmist cards should feel gently rounded, not sharp.
* Device mockups should have the most pronounced radius.

---

# 6. Shadows

Shadows should create depth without heaviness.

They should feel soft, diffused, and premium.

## Shadow Levels

Small

* Very soft vertical shadow
* Use for buttons, pills, elevated nav, light cards

Medium

* Moderate spread with low opacity
* Use for standard cards, hover states, compact panels

Large

* Broader shadow with more vertical distance
* Use for hero surfaces, large cards, featured sections

Floating

* Strongest shadow in the system, still soft
* Use for dialogs, mobile nav panels, floating callouts

Glass

* Subtle shadow with blur-supported surface
* Use only for translucent UI such as sticky header or glass cards

## Usage Rules

* Shadow should never look muddy or gray.
* Use elevation to support hierarchy, not decoration.
* Hover elevation should be subtle.
* Glass surfaces must use lighter shadows than opaque cards.

---

# 7. Buttons

Buttons should feel confident, tactile, and easy to scan.

## Button Types

Primary

* Blue gradient fill
* White text
* Soft shadow
* Used for main page action only

Secondary

* White or light surface fill
* Dark text
* Border or subtle shadow
* Used for important but non-primary actions

Outline

* Transparent or light fill
* Visible border
* Dark text
* Used for supporting actions, legal navigation, optional paths

Ghost

* No heavy background
* Minimal hover tint
* Used for low-priority UI actions

Disabled

* Muted background
* Reduced contrast
* No shadow lift
* Must still remain readable

Loading

* Same visual footprint as enabled state
* Label remains stable
* Loading indicator should not cause layout shift

## Interaction States

Hover

* Slight lift
* Slight shadow increase
* Minor darkening or tint shift

Focus

* Visible blue focus ring
* Never rely on hover only

Active

* Slightly reduced lift
* Slightly stronger pressed state contrast

## Spacing

* Horizontal padding should feel generous
* Vertical padding should support easy tapping on mobile
* Minimum height should feel substantial, not thin

## Icon Placement

* Icons should appear before or after label with clear spacing
* Leading icons for product or store actions
* Trailing icons for directional actions
* Icon and text should align on the same visual baseline

## Animation

* Fast and subtle
* Never bouncy
* Hover lift should be minimal

---

# 8. Cards

Cards are one of the main Appmist building blocks.

All cards should feel soft, airy, and high-quality.

## Feature Card

Padding

* `24px` to `32px`

Radius

* `18px` to `24px`

Shadow

* Medium

Hover Effect

* Slight lift and slightly stronger shadow

Usage

* Product features, value explanations, benefits

## FAQ Card

Padding

* `20px` to `24px`

Radius

* `18px`

Shadow

* Small to medium

Hover Effect

* Minimal surface tint or subtle elevation

Usage

* Expandable question-answer groups

## Screenshot Card

Padding

* `16px` to `24px` around the framed device

Radius

* `24px`

Shadow

* Large

Hover Effect

* Slight floating lift only

Usage

* Product screenshots, galleries, app previews

## App Card

Padding

* `24px` to `32px`

Radius

* `24px`

Shadow

* Medium

Hover Effect

* Slight lift, subtle border emphasis

Usage

* Featured app modules, future app previews, product collections

## Comparison Card

Padding

* `24px` to `32px`

Radius

* `18px`

Shadow

* Small

Hover Effect

* Usually none or extremely subtle

Usage

* Feature comparisons, product distinctions, trust-oriented tables

## Glass Card

Padding

* `20px` to `28px`

Radius

* `24px`

Shadow

* Glass

Hover Effect

* Slight highlight shift, not heavy elevation

Usage

* Premium hero accents, floating information, atmospheric overlays

## Card Rules

* Most cards should live on light surfaces.
* Borders should remain subtle.
* Avoid stacking too many shadows within the same card.
* Cards should be content-led, not decoration-led.

---

# 9. Icons

Icons must be SVG only.

No emojis.

## Preferred Size Scale

* `16px`
* `20px`
* `24px`
* `32px`
* `40px`
* `48px`

## Stroke Width

* Default: `1.75px` to `2px`
* Larger hero icons may go slightly heavier when needed

## Corner Style

* Soft corners
* Clean, modern terminals
* No overly playful cartoon shapes

## Icon Rules

* Use one consistent icon family at a time
* Keep icon alignment precise
* Avoid over-detailed icons
* Icons should support comprehension, not create clutter

---

# 10. Illustrations

Illustrations should feel modern, light, and product-adjacent.

## Illustration Style

* Vector-based
* Clean geometry
* Limited palette
* Soft depth
* Minimal visual noise

## Rules

* No stock photography
* No fake office scenes
* No overly abstract startup blobs
* No childish cartoon treatment

Phone mockups should appear realistic.

Screenshots should be framed inside devices.

Screens should never float as plain rectangles when presented as product art.

Illustrations should support clarity:

* explain use
* reinforce trust
* add warmth without distraction

---

# 11. Motion

Motion should feel calm, smooth, and useful.

It should guide attention, reinforce quality, and never feel flashy.

## Motion Philosophy

* Short
* Soft
* Purposeful
* Never theatrical

## Motion Types

Fade In

* Use for section entrance and content reveal
* Duration: `240ms` to `400ms`

Slide

* Use for nav, accordion content, and subtle reveal transitions
* Duration: `280ms` to `420ms`

Hover Lift

* Use for cards and buttons
* Duration: `180ms` to `220ms`

Button Interaction

* Fast press/hover feedback
* Duration: `140ms` to `180ms`

Accordion

* Smooth expand/collapse without snap
* Duration: `220ms` to `320ms`

Page Transition

* If used later, keep extremely subtle
* Duration: `220ms` to `320ms`

## Easing

Preferred easing:

* `ease-out` for reveals
* `ease-in-out` for state changes
* No springy or rubber-band effects

## Reduced Motion Support

* All important interactions must work with animation reduced or removed
* Decorative motion must be disabled when reduced motion is requested
* Interface hierarchy must remain clear without animation

---

# 12. Responsive Breakpoints

Appmist is mobile-first.

Most users will arrive from Google Play on mobile devices.

## Breakpoints

Mobile

* `0px` to `767px`

Tablet

* `768px` to `1023px`

Laptop

* `1024px` to `1279px`

Desktop

* `1280px` to `1535px`

Large Desktop

* `1536px` and above

## Layout Behavior

Mobile

* Single-column first
* Strong content priority
* Tight but breathable spacing
* Sticky navigation with hamburger menu

Tablet

* Introduce two-column patterns where useful
* Increase section spacing
* Allow screenshots and cards to breathe more

Laptop

* Standard split layouts
* Hero media and text may sit side by side
* More visible content grouping

Desktop

* Generous whitespace
* Stronger composition and asymmetry
* Richer visual rhythm

Large Desktop

* Maintain readability with controlled content width
* Do not stretch text lines excessively

---

# 13. Components

## Navigation

Appearance

* Sticky
* Transparent initially
* White or glass surface after scroll
* Clean brand mark on the left
* Minimal nav links

Behavior

* Mobile uses hamburger menu
* Desktop stays visible
* Hover and active states are subtle, not loud

## Hero

Appearance

* Dark gradient background
* Large headline
* Clear subheading
* Strong CTA hierarchy
* Optional atmospheric glow or subtle motion

Behavior

* Must communicate the product or brand in seconds
* Primary CTA should be obvious
* Copy should remain concise

## Footer

Appearance

* Calm, structured, light background
* Clear link grouping
* Contact information visible

Behavior

* Must feel complete, not like an afterthought
* Legal and support links should always be easy to find

## Section Headings

Appearance

* Clear hierarchy
* Small eyebrow optional
* Strong heading with brief supporting text

Behavior

* Should orient the user quickly
* Never use long introductory paragraphs

## CTA

Appearance

* Prominent but clean
* Primary button first
* Secondary action available when useful

Behavior

* One clear decision per CTA block
* No crowded action rows

## Phone Mockup

Appearance

* Realistic Android framing
* High-quality screen masking
* Strong depth and clean presentation

Behavior

* Must show product UI clearly
* Never distort screenshots

## Feature Grid

Appearance

* Balanced card system
* Consistent icon placement
* Clear feature hierarchy

Behavior

* Focus on benefits first, feature detail second
* Cards should scan easily on mobile

## Screenshot Gallery

Appearance

* Device-framed visuals
* Spacious layout
* Strong contrast between screen and background

Behavior

* Show a logical product story
* Avoid chaotic image collections

## FAQ Accordion

Appearance

* Simple cards
* Clear question emphasis
* Minimal chevron/icon treatment

Behavior

* Easy to expand with keyboard
* Content should open smoothly and read easily

## Comparison Section

Appearance

* Structured, quiet, easy to scan
* Minimal borders
* Strong alignment

Behavior

* Must simplify decisions, not add complexity

## App Cards

Appearance

* Premium, reusable card pattern
* App icon or device visual
* Clear app title and description

Behavior

* Must scale to multiple future products
* Layout should stay stable even as products are added

## Coming Soon Cards

Appearance

* Similar structure to app cards
* Slightly quieter treatment
* Clear “coming soon” status

Behavior

* Should create anticipation without implying false availability

---

# 14. Accessibility

Accessibility is a baseline requirement, not a polish item.

## Contrast Requirements

* Body text must meet accessible contrast standards
* Muted text should still remain readable
* Text over gradients or images must always be checked carefully

## Keyboard Navigation

* All interactive controls must be keyboard accessible
* Menus, accordions, dialogs, and links must have logical tab order

## Focus Indicators

* Clear visible focus ring required
* Focus must not rely only on color changes

## ARIA Guidance

* Use ARIA only when semantic HTML is not enough
* Labels and expanded states must be correctly conveyed
* Decorative icons should be hidden from assistive technology

## Reduced Motion

* Support user motion preferences everywhere motion is introduced

## Semantic HTML

* Correct heading hierarchy
* Proper landmarks
* Buttons for actions
* Links for navigation
* Meaningful alt text for informative images

---

# 15. Performance

Performance is part of the design system because speed shapes trust.

## Rules

* Minimize CSS
* Minimize JavaScript
* Avoid layout shift
* Optimize images
* Prefer CSS animations over heavy scripting
* Avoid decorative effects that cost too much for too little value

Design decisions should always respect lightweight delivery.

Premium should come from discipline, not payload.

---

# 16. SEO UI

UI choices affect discoverability and clarity.

## Image Alt Text

* Every meaningful image needs descriptive alt text
* Decorative visuals should use empty alt text

## Heading Hierarchy

* One clear H1 per page
* H2s define major sections
* H3s and below support structure

## Link Styling

* Links must remain recognizable as interactive
* Hover and focus should reinforce clickability
* CTA links should visually differ from inline text links

## Metadata Consistency

* Page structure should support consistent titles, descriptions, and social previews
* Open Graph imagery should align with the visual system

---

# 17. Future Scalability

This design system must support growth without redesign.

## Multiple Apps

* Use shared app card patterns
* Keep screenshot modules reusable
* Build product sections so one app can become many without visual fragmentation

## Future Landing Pages

* Reuse navigation, hero, feature, screenshot, FAQ, and CTA patterns
* Allow each product page to feel specific while staying recognizably Appmist

## Dark Mode

* Future dark mode should preserve the same calm and premium feel
* Dark mode is an extension of the system, not a new brand

## Localization

* Layouts must allow longer copy in other languages
* Buttons and headings should not depend on ultra-short English strings

## Additional Product Pages

* Product pages should inherit the same card logic, spacing rhythm, and CTA hierarchy
* Do not invent unique visual systems for every new app

---

# 18. AI Instructions

Future AI assistants working on Appmist should follow these instructions:

* Always follow this design system.
* Always cross-check with `APPMIST_RULES.md`, `PROJECT.md`, `TIMEUP_LOCK.md`, and `COPYWRITING.md`.
* Do not introduce new colors without strong justification.
* Reuse components whenever possible.
* Maintain visual consistency across every page.
* Prefer refinement over redesign.
* If unsure, choose the simpler design.
* Do not make Appmist look like a generic SaaS website.
* Do not add visual clutter to make the interface feel “designed.”
* Respect the privacy-first and lightweight nature of the product.
* Use large, readable typography and generous spacing.
* Keep motion subtle and optional.
* Never invent visual patterns that conflict with existing Appmist pages without a clear system-level reason.
* New components should feel like natural extensions of the existing system.
* Future app pages must feel consistent with TimeUp Lock while remaining reusable for other products.

End of Document.
