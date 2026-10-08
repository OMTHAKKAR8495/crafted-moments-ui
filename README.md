# Crafted Moments UI

Create a premium, modern, highly animated marketing website UI inspired by the uploaded Caffein Cafe design reference.

IMPORTANT:
- THIS IS UI ONLY.
- Do NOT build backend functionality.
- Do NOT add authentication.
- Do NOT add database/Supabase.
- Do NOT add APIs.
- Do NOT add payment functionality.
- Use mock/static content and placeholder images where necessary.
- Focus entirely on visual quality, responsive layout, animations and interactions.
- Build the complete frontend in one pass so it is usable without additional Lovable credits.

DESIGN DIRECTION:
Create a sophisticated editorial-style website with a premium cafe/brand feeling.
The design should feel like a high-end creative agency / luxury cafe website rather than a generic template.

Use:
- Warm off-white / cream background
- Pure white sections where appropriate
- Deep black/dark charcoal typography
- Large elegant typography
- Strong visual hierarchy
- Generous whitespace
- Full-width imagery
- Editorial layouts
- Minimal borders
- Almost no rounded cards
- No excessive gradients
- No generic SaaS dashboard styling
- No excessive glassmorphism
- No bright neon colors

COLOR SYSTEM:
Background: #F3EFEC
White: #FFFFFF
Primary text: #151515

TYPOGRAPHY:
Use an elegant combination similar to:
- Playfair Display for large editorial headings
- Raleway for navigation and UI
- Open Sans for readable body text
- Poiret One only for selected decorative/brand text

Use large responsive headings:
- Hero: approximately 72px desktop
- Major sections: 40–50px
- Body: 16–18px
Use light/regular font weights rather than heavy bold everywhere.

SITE STRUCTURE:

1. STICKY NAVIGATION
Create a minimal premium navigation bar:
- Brand/logo on left
- Menu items: Home, About, Menu, Experience, Gallery, Contact
- CTA button: Visit Us
- Transparent/light appearance initially
- On scroll, smoothly transition into a slightly solid cream/white navigation
- Mobile hamburger menu with smooth slide/fade animation

2. HERO SECTION
Create a visually impressive full-screen hero.

Include:
- Large editorial headline
- Short supporting text
- Primary CTA
- Secondary text/link
- Large high-quality cafe/coffee visual
- Small decorative text/details around the composition

Animation:
- Hero image slowly fades and scales into position
- Heading reveals upward with staggered letters/words
- Supporting text fades upward
- CTA appears slightly after the heading
- Add subtle continuous image movement/parallax
- Keep animation elegant and not distracting

Example headline style:
"Coffee, Crafted
With Character."

3. INTRO / BRAND STORY
Create an editorial two-column section.

Left:
- Small eyebrow label
- Large heading

Right:
- Brand story paragraph
- CTA/link

Add an oversized decorative number or typography element.

On scroll:
- Text reveals upward
- Image/content enters with slight horizontal movement
- Use staggered reveal timing

4. FEATURED EXPERIENCE SECTION
Create a large immersive section showcasing the cafe experience.

Use:
- Large image
- Floating small information block
- Short description
- CTA

Add hover interaction:
- Image subtly zooms
- Text/link moves slightly
- Smooth transition

5. MENU / SIGNATURE SECTION
Create an elegant menu preview.

Include categories:
- Coffee
- Signature Drinks
- Desserts
- Food

Use clean editorial rows instead of standard cards.

Each item should have:
- Item name
- Short description
- Price
- Small decorative separator

On hover:
- Row shifts slightly
- Price/text transitions smoothly
- Optional image preview appears/fades in

6. VISUAL GALLERY
Create a masonry/editorial gallery with 8–10 images.

Use different image sizes to create an artistic composition.

Interactions:
- Image hover zoom
- Slight overlay
- Cursor/arrow interaction
- Smooth transitions

Do not make every image the same size.

7. EXPERIENCE / WHY US
Create 3–4 elegant feature blocks:
- Crafted Daily
- Premium Ingredients
- Relaxed Atmosphere
- Made For Moments

Use minimal icons or typography rather than generic large icons.

Animate each block sequentially when entering viewport.

8. TESTIMONIAL / QUOTE SECTION
Create a spacious editorial quote section.

Large quotation typography.
Customer name and small supporting information.

Use subtle fade transition between mock testimonials if implementing a carousel visually.

9. LOCATION / VISIT SECTION
Create:
- Address placeholder
- Opening hours
- Contact information
- "Get Directions" CTA
- Large supporting image

Keep this visually minimal.

10. FINAL CTA
Create a dramatic full-width final section.

Large heading:
"Your next coffee moment starts here."

Add CTA:
"Visit Us"

Use a large background image with a subtle dark overlay only if needed for readability.

11. FOOTER
Create a premium minimal footer:
- Logo
- Short brand description
- Navigation
- Social links
- Contact information
- Copyright

ANIMATION SYSTEM:

Use Framer Motion or lightweight CSS animations where appropriate.

Implement:
- Smooth page-load animation
- Scroll reveal animations
- Staggered text animations
- Image fade/scale animations
- Hover image zoom
- Button hover transitions
- Navigation scroll transformation
- Mobile menu animation
- Section reveal animations
- Subtle parallax where performance allows

Animation timing should feel premium:
- Fast interactions: around 0.2–0.3s
- Standard reveals: around 0.3–0.5s
- Hero/image transitions: around 0.8–1s
- Avoid excessive bouncing or playful animations

IMPORTANT:
Animations must be smooth and sophisticated, not flashy.

INTERACTION DETAILS:
- Buttons should have elegant hover states
- Links should have animated underline/reveal effects
- Images should have subtle zoom on hover
- Navigation should smoothly transform on scroll
- All interactive elements need visible hover/focus states
- Mobile interactions must remain smooth

RESPONSIVE DESIGN:
Desktop:
- Large editorial composition
- Full-width imagery
- Generous whitespace

Tablet:
- Reduce typography and spacing proportionally
- Preserve editorial layout

Mobile:
- Single-column layouts
- Hamburger navigation
- Large but responsive typography
- Touch-friendly buttons
- Gallery becomes 2-column or single-column where appropriate
- No horizontal overflow
- Animations should be reduced slightly for mobile performance

VISUAL QUALITY:
The final result should look like a professionally designed premium website from a modern creative studio.

Avoid:
- Generic Tailwind template appearance
- Excessive rounded cards
- Excessive shadows
- Excessive gradients
- Huge numbers of buttons
- Dashboard UI
- Fake functionality
- Overly complicated components
- Random colors
- Excessive animation

TECHNICAL:
- Frontend/UI only
- Use React
- Use Tailwind CSS if available
- Use Framer Motion for animations if available
- Keep components clean and reusable
- Use responsive breakpoints
- Use semantic HTML
- Optimize images and animations for performance
- Ensure accessibility and keyboard focus states

MOST IMPORTANT:
Prioritize the visual design, typography, spacing, image composition, transitions and premium animation quality over adding extra functionality.

Build the COMPLETE UI in this single generation.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4a662c71-83dc-43aa-a739-c85dbc9e284b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
