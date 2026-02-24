## 2026-02-22

- Publish homepage copy updates in `app/page.tsx`.
- Configure Next.js static export for GitHub Pages in `next.config.mjs`.
- Add GitHub Actions workflow at `.github/workflows/deploy-github-pages.yml` to build and deploy from `main`.
- Enable automatic GitHub Pages setup in the deploy workflow when Pages is not configured yet.
- Refresh generated Next.js route type import path in `next-env.d.ts`.
- Add founder-support section image beside the heading text in `app/page.tsx`.
- Replace the homepage founder-support image with `IMG_9746 2.jpg` and resize it to `550x550` in `app/page.tsx`.
- Add `IMG_4570.heic` under the contact subtitle on `app/contact-us/page.tsx` with matching `550x550` dimensions.
- Update generated Next.js route type import in `next-env.d.ts` to the `.next/dev` path.
- Shift the site to a light, image-matched background palette in `app/globals.css` for seamless blending with hero artwork.
- Add resilient rainbow text labels for buttons (`.button-label`, `.menu-label`) with WebKit-safe fallback styling in `app/globals.css`.
- Update button markup in `components/Header.tsx`, `components/ContactForm.tsx`, `components/SubscribeForm.tsx`, and `app/page.tsx` to use shared label spans.
- Keep style texture by scoping the menu-like pastel background to the contact submit action via `.contact-submit` in `components/ContactForm.tsx` and `app/globals.css`.
- Replace the homepage hero `<video>` with `components/HeroVideo.tsx` to default playback volume to `50%`, add a dedicated mute/unmute control, auto-mute when other media plays, and keep background playback running if paused.
- Style the hero audio toggle overlay in `app/globals.css` for reliable click handling over video.
- Add regression coverage in `tests/site.spec.ts` for hero audio toggle behavior, media-priority auto-mute, and pause-resume guard logic.
- Make header `CONTACT US` actions match the `Menu` button surface by applying a shared `.menu-surface` class in `components/Header.tsx` and `app/globals.css`.
- Set hero video default startup volume to `40%` and keep sound-on preference (no forced mute fallback) in `components/HeroVideo.tsx`.
- Extend regression checks in `tests/site.spec.ts` to assert hero startup state initializes at `volume: 0.4` and `muted: false`.
- Update founder-support image sizing in `app/page.tsx` to use `object-fit: contain` with responsive width/height constraints so the full image displays without cropping.
- Restore reliable hero autoplay in `components/HeroVideo.tsx` by starting muted first, then attempting to enable sound at `50%` when browser autoplay policy allows.
- Refresh regression coverage in `tests/site.spec.ts` to validate hero startup volume is `0.5` and playback begins on page load (`paused: false`).
- Update footer links in `components/Footer.tsx` by renaming `Twitter` to `X` and removing `Terms of Use` plus `Cookie Settings`.
- Add `components/RainbowFlowText.tsx` and switch button/menu labels to character-level animated rainbow text in `components/Header.tsx`, `components/ContactForm.tsx`, `components/SubscribeForm.tsx`, and `app/page.tsx`.
- Expand holographic styling in `app/globals.css` for flowing border and glow effects, smoother loop timing, larger label text, thicker button outlines, and a static-border color-flow animation.
- Remove the extra mobile-menu `CONTACT US` holographic button in `components/Header.tsx`, keeping only the standard `Contact` menu link.
- Match `Menu` button hover styling to page buttons and shift hover glow rendering from static purple shadow to animated holographic rainbow flow in `app/globals.css`.

## 2026-02-24

- Apply a V1 holographic "pop pass" in `app/globals.css` by introducing tunable holo variables for border/glow opacity, blur, surface tint, and label micro-shadow.
- Increase idle border definition, make glow visible at rest, and rebalance hover/active intensity so buttons pop on off-white while preserving the existing rainbow animation behavior.
- Deepen key cyan/magenta gradient stops and add subtle local surface tint on `.button.secondary` and `.menu-button` for stronger contrast on light backgrounds.
- Build a "Pastel Prism" art direction in `app/globals.css` with warm/cool/lilac section atmosphere layers, frosted card surfaces, pearl-like sheens, and harmonized pastel holographic accents.
- Update homepage section wrappers in `app/page.tsx` to apply `section-prism-warm`, `section-prism-cool`, and `section-prism-lilac` atmosphere classes.
- Fix holographic border animation looping in `app/globals.css` by using repeating border gradient layers and seamless keyframe endpoints (`background-position` and hue cycle) to remove end-of-cycle snap/reset artifacts.
- Add regression coverage in `tests/site.spec.ts` to assert seamless holographic keyframe endpoints and expected gradient tiling configuration.
- Remove remaining holographic loop snap by switching border/glow pseudo-element animations to `alternate` direction and eliminating keyframe hue-rotation transitions in `app/globals.css`.
- Strengthen holographic regression checks in `tests/site.spec.ts` by asserting runtime pseudo-element animation direction/names in addition to keyframe and tiling expectations.
- Replace direct subscribe submission in `components/SubscribeForm.tsx` with client-side POST to `/api/subscribe`, adding inline loading, success, and error feedback states.
- Add `app/api/subscribe/route.ts` with server-side email validation, safe Formspree forwarding via `lib/forms.ts`, and resilient JSON responses for misconfiguration/upstream failures.
- Add hero media fallback handling in `components/HeroVideo.tsx` so failed video loads render a dedicated fallback shell and hide the audio toggle.
- Expand `app/globals.css` with hero fallback visuals, subscribe feedback styles, disabled button treatment, and mobile responsiveness improvements for spacing, typography, and tap-target comfort.
- Extend `tests/site.spec.ts` with regression checks for subscribe API wiring/UI feedback, hero fallback rendering, and mobile viewport control visibility; also harden existing selectors/assertions for stable execution.
