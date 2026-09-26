# SPAN

**A fictional brand and website built to demonstrate the full design-to-development process: research, wireframing, brand identity, high-fidelity design, and responsive UI.**

*By Joseph Boucher · Graphic & Web Designer, Developer · Tools: Illustrator, Figma, HTML, CSS, JavaScript, Git/GitHub*

**[View Live Site](https://jobrophoto.github.io/span-website/) · [View Code on GitHub](https://github.com/jobrophoto/span-website)**

---

## Overview

SPAN is a fictional structural engineering firm I created to document a complete design pipeline for my portfolio — from initial research through a finished, responsive website. Rather than designing a generic template, I wanted to prove I could carry one idea consistently through every stage, which included: research, wireframes, a real brand identity (including a custom logo), high-fidelity mockups, and a fully responsive build.

I chose civil/structural engineering as the subject deliberately. My moodboard research kept pulling toward restrained, trust-building, professional-service aesthetics — the opposite of the flashier, more experimental energy that might fit a web dev agency. I'm also just drawn to that world visually: construction, raw steel, the tough, gritty, blue-collar look of a real job site. Rather than force a mismatch, I picked the concept that matched both what I'd curated and what I genuinely wanted to design.

---

## 1. Research

I started by collecting reference sites — agencies, engineering firms, artist portfolios — and annotating what specifically worked about each one: scroll-triggered fades, hover micro-interactions, full-screen nav drawers, restrained one-accent-color palettes. A few patterns kept surfacing:

- **Hero treatments** with lowered-opacity full-width imagery for a premium, legible feel
- **Hover interactions with a tactile, "pressed" quality** rather than purely decorative motion
- **One confident accent color** against a neutral base, used sparingly
- **Mobile-ready, symbol-driven navigation** — sites like Nudot and Neko favored icons and minimal text over long nav labels, an approach that translates naturally to small screens
- **Sticky desktop navs with a shrink-on-scroll animation** — several references kept the nav pinned but subtly compressed it as the page scrolled, a small touch that felt fluid without adding weight
- **Bold, oversized headline type paired with generous white space** — this was the most consistent thread across nearly every site I looked at, more than any single interaction pattern

I also set a hard constraint early: **no lag**. A few of my favorite references were visually stunning but noticeably heavy on animation. I decided restraint would be a feature, not a compromise — a decision I documented and stand behind in the final build.

---

## 2. Wireframes

Before any visual design, I mapped low-fidelity wireframes for two page types: the **homepage** and a **case study / project detail page**. Keeping this stage colorless and typeless forced me to solve structure first — nav, hero, services, featured work, credibility stats, and an "approach" section — before touching any styling. It was also my first time using dashed strokes instead of solid ones for the boxes, which made it immediately clear at a glance what was placeholder versus final — a small convention I'll keep using going forward. Working through both page types side by side also made it obvious how much layout structure could stay consistent across the site — nav, footer, and section spacing repeat with only the content changing, which made the later build much more predictable.

---

## 3. Brand Identity

### Naming
I landed on **SPAN** — a real structural engineering term (the distance a beam or bridge covers between supports) that also reads as a strong, simple wordmark. The concept felt personal too: it reminded me of a photography project I did in college for Photography 1, where I shot linear architecture and leading lines — a lot of that imagery ended up strikingly close to what I was now curating for SPAN's moodboard.

### Logo
The logo went through several rounds of iteration. My first instinct was to build a literal bridge/arch motif into the crossbar of the "A" in SPAN. Early digital attempts drifted into looking like a winding road or highway interchange rather than a clean structural arch — a good lesson in how easily a good concept can be over-complicated. Testing it at small sizes made the problem obvious: the extra curve detail blurred into an unreadable shape at favicon scale, which was one of the main reasons I knew it needed to be simplified. I rebuilt it using symmetric pen-tool anchor points to get one clean, single-curve arch, then inverted it into negative space so the arch reads as an opening within the letterform rather than a decoration on top of it.

### Color & Type
- **Charcoal (#1A1A1A)**, **off-white (#F5F3EF)**, **steel grey (#9C9691)**, and a **rust accent (#C1531B)** — an industrial, oxidized-steel-inspired palette used sparingly for CTAs and emphasis. The rust tone specifically was chosen because it's a color you actually see everywhere on real construction sites — safety equipment, rusted rebar, hazard markings — which grounds the brand in something authentic rather than an arbitrary accent choice.
- **Space Grotesk** for headers, **Inter** for body copy — a geometric-but-warm pairing. Space Grotesk's clean geometric shapes and slightly quirky details (like its flat-topped "1") give it a modern, technical feel without going full blueprint-drafting-stencil — which felt right for a brand that's precise but still warm, not sterile. Inter was chosen for body copy because it's built specifically for screens — tall x-heights and open counters keep it legible even at small sizes — and its slightly warmer, more humanist letterforms balance out Space Grotesk's more mechanical geometry rather than competing with it.

### Documentation
I built a full brand identity sheet covering clear space, tested minimum sizes (verified by actually shrinking the logo in steps, not guessing), color, typography scale (mobile and desktop), and real-world applications like a business card mockup. I also showed the typography set in different color combinations to confirm legibility held up across the palette, and included logo variations for different applications — light background, dark background, and on the brand's rust accent — so the mark stays legible no matter where it's placed.

---

## 4. High-Fidelity Design

With the system locked, I designed complete homepage and case study pages in both desktop and mobile, including:

- A darkened, textured hero image (adjusted after initial legibility feedback showed the raw photo competing with the headline)
- An interactive "Why work with SPAN" section, inspired by a reference site's title-to-image swap pattern — adapted from **hover** on desktop to **tap-to-expand accordion** on mobile, since hover doesn't exist on touch devices
- A responsive layout for the case study page: Challenge/Approach sit side-by-side on desktop but stack on mobile, and supporting images shift from a static grid to a horizontal swipeable strip on smaller screens
- Consistent card treatment reused across every section that needed one — services, featured projects, homepage stats, and the case study's outcome metrics all share the same background, border, and radius values, so the page reads as one system rather than a set of one-off components
- The finished logo integrated everywhere it needed to live: full-size in the nav, reduced-opacity in the footer, and as a standalone icon mark inside the Structural Design service card — proof that the arch motif held up as a real, reusable brand asset rather than just a hero image
- A "flagship" case study built out in full for Riverside Bridge — hero, quick facts, challenge, approach, supporting imagery, and outcome metrics — designed as a repeatable template so future projects could drop into the same structure without redesigning it from scratch
- A dedicated Contact section styled to match the stats card treatment, closing a consistency gap where it had originally been left as plain centered text while every other section on the page lived inside a bordered card

Before any of this went to code, I mocked the interactive Why Work With SPAN concept as a working prototype — hovering an item on desktop swapped the adjacent photo, and tapping an item on mobile expanded it in place — so I could validate the interaction actually felt right before committing to building it for real.

---

## 5. Responsive Design Decisions

Rather than treating mobile as "the same page, smaller," I made deliberate structural changes at each breakpoint:

| Element | Desktop | Mobile |
|---|---|---|
| Nav | Full inline links | Hamburger menu |
| Quick facts | 4-column row | 2×2 grid |
| Challenge / Approach | Side-by-side | Stacked |
| Supporting images | 3-column grid | Horizontal scroll |
| Footer nav | Horizontal, matches header | Stacked, right-aligned |

---

## 6. Development

With the design system fully resolved, I built the site from scratch in vanilla HTML, CSS, and JavaScript — no framework, no template — deployed with Git and hosted on GitHub Pages. This was also my first real project translating a Figma design into working code end to end, so a lot of this section is genuinely new skill-building, not just applying things I already knew.

### Structure and system
I set up the whole visual language as **CSS custom properties** (`--color-rust`, `--font-header`, etc.) in a single `:root` block early on, which paid off constantly — every later color or type decision was a one-line change instead of a find-and-replace across hundreds of lines. Flexbox and CSS Grid handled almost all layout: grids for evenly-sized card collections (services, projects, supporting images), flexbox for anything needing alignment or spacing control (nav, stats, the Challenge/Approach split). Once I had one working two-column flex pattern, I reused it across four different sections just by swapping content.

### Recreating the design system in code
A few visual choices from the design phase needed real technique to reproduce:
- **The darkened hero photo** used a `::before`/`::after` pseudo-element stack — a grayscale background layer and a gradient overlay layer, both sitting behind the real content via `z-index`. This let me keep the actual HTML clean (no extra wrapper divs for the image) while still layering multiple visual effects.
- **The inline SVG logo** used `fill="currentColor"` on every path instead of a hardcoded color, so the logo's color could be controlled entirely from CSS (`color: var(--color-steel)`) — meaning one SVG file works in the nav, the footer, and anywhere else, at any color, without needing separate exported files.
- **Photo consistency** (grayscale everywhere except the selectively-colored About photo) came down to one repeated line, `filter: grayscale(100%)`, applied per-image — and deliberately *omitted* on the one photo where I'd already baked in the color treatment in Photoshop, which meant remembering that CSS and pre-edited assets needed to agree with each other.

### The interactive "Why Work With SPAN" section
This was the most involved piece of JavaScript on the site: clicking an item removes the `active` class from all four, adds it to the one clicked, and swaps an image's `src` to match a `data-image` attribute on that item. It's a small function, but it's a genuinely reusable pattern — I used the same "loop through elements, clear a state, apply it to one" logic again for the mobile hamburger menu, just with `classList.toggle()` instead of `add`/`remove`, since a menu only needs an open/closed flip rather than an exclusive-selection state.

### Responsive build with media queries
Media queries were a new concept going in. Once the mental model clicked — write desktop styles first, then override just what needs to change inside `@media (max-width: 768px) { }` — most of the actual work was fast: grids collapsing to one column, flex rows switching to `flex-direction: column`, padding tightening up. A few responsive decisions needed real judgment rather than just "make it smaller," like the Why Us section's photo, which moved from a persistent side-by-side image on desktop to a photo embedded *inside* each accordion item on mobile — reusing the same active/inactive JavaScript state that was already driving the desktop version, just displayed differently.

### Debugging, honestly
I hit real bugs along the way, and tracking them down taught me more than the parts that worked on the first try:
- A missing `<main>` tag and a mismatched CSS class name (`project-grid` vs. `projects-grid`) — small typos that produced a totally broken layout, which taught me to check for exact-match naming first whenever a style "does nothing."
- Invalid CSS values that failed silently — `grayscale(%100)` instead of `grayscale(100%)`, `20p` instead of `20px` — the browser just drops an invalid declaration instead of erroring, so these took a second look to catch.
- The trickiest one: my mobile nav menu was toggling correctly (confirmed in DevTools — the `open` class was there, `display: flex` was applied) but nothing was visible. It turned out to be a `z-index` stacking issue — the dropdown was rendering *behind* the hero section's own layered pseudo-elements. Fixing it meant understanding that stacking order isn't just about which CSS "wins," but about how elements with `position` and `z-index` create their own stacking contexts.

### Finishing touches
Once the core build and responsive pass were done, I added: hover states (color shift + an animated underline using a `::after` pseudo-element that grows from `width: 0` to `100%`) on every nav link, `scroll-behavior: smooth` for anchor navigation, and a staggered page-load entrance animation using `@keyframes` — the background photo fades and settles in first, then the headline, subtext, and button follow in sequence with increasing `animation-delay` values. I made a deliberate call to stop there rather than add more motion (like scroll-triggered animations), since restraint had been a stated design principle from day one, and I didn't want the finished site to contradict the reasoning I'd used to get there.

---

## Reflection

Looking back across the whole process — research, wireframes, brand identity, logo, hi-fi mockups, and a fully responsive build — a few lessons stuck with me more than others.

The biggest was learning to separate **research from decoration**. My moodboard told me what I liked, but the real work was figuring out which patterns actually served the content versus which were just visually interesting in isolation. Restraint (no lag, one accent color, one signature interaction) ended up being the throughline that made the whole system feel cohesive rather than assembled from unrelated inspiration.

The logo taught me a related lesson from a different angle: a good concept can quietly become a worse one through over-iteration. The road/interchange version was technically impressive, but it had drifted from the actual idea I was trying to communicate. Testing it at small sizes is what surfaced that — legibility problems forced me to notice a conceptual problem I might have otherwise missed. I don't think I would have caught that without actually testing at real scale instead of judging it at full size on a monitor.

Building responsively also changed how I think about "adapting" a design. Early on I assumed mobile meant shrinking the same layout. By the end, I was treating each breakpoint as its own design problem — hover becomes tap, a grid becomes a scrollable strip, four columns become two — while keeping the underlying content and brand system identical. That distinction between *what stays consistent* and *what should genuinely change* is something I want to be much more deliberate about going forward.

Overall, this project functioned less like a single deliverable and more like a personal toolkit. The habits I built here — testing assumptions instead of guessing, documenting *why* a decision was made and not just what it was, treating mobile as its own design challenge rather than an afterthought — aren't specific to SPAN. Getting hands-on with Figma for the first time on real work, and building the debugging instinct to check the browser's Console before assuming my own logic was wrong, were two of the most practical, transferable skills to come out of it. I plan to carry this whole process into future projects, rather than treating it as a one-off exercise for this portfolio piece.

