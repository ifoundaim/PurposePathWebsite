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
