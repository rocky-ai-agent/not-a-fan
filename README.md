# Not a Fan

Milestone 1 is a simple static landing page for a social-survival product aimed at people who do not follow sports but still need safe, usable small-talk.

## What is included

- Mobile-first landing page with a strong safe-line-first hero
- A city / ZIP preference control in the upper right
- Required sections:
  - `Todays Talking Points`
  - `What season is it currently?`
  - `Deeper Dives`
- Pronunciation and audio affordances for player names using the browser speech API
- Premium-ready teaser copy and CTA without payment flow
- Believable demo data for a busy late-March sports week

## Run locally

This repo has no build step. Open `index.html` directly or serve it with a basic static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

- Location preferences currently switch between a few demo profiles and fall back to Chicago by default.
- Waitlist capture is a Milestone 1 placeholder and does not submit anywhere.
- Audio playback depends on browser support for `speechSynthesis`.
