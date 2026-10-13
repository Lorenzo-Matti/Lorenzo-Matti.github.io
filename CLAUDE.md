# Notes for Claude

- One responsive site, one URL, for phone and desktop. Never build a separate mobile site or page.
- Tailwind is mobile-first: unprefixed classes are the phone layout, `md:` (768 px and up) is the desktop layout. Desktop is the reference look; change phones only with unprefixed classes and keep the `md:` result identical unless asked.
- Every visual change must be checked at both widths before pushing: 390×844 (phone, `isMobile: true`) and 1440×900 (desktop). No horizontal scroll on phones (`scrollWidth` must equal the viewport width).
- Hero: on phones the video is shown uncropped in a 16:9 band with the text below; from `md` up it fills the screen with the text on top.
