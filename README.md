# Not a Fan

Milestone 3 is a static mobile-first homepage for a social-survival product aimed at people who do not follow sports but still need safe, usable small-talk.

## What is included

- Mobile-first homepage with a stronger first-screen conversation rescue flow
- A city / ZIP preference control with quick city presets and saved local state
- A fast first-30-seconds hierarchy:
  - if they ask you first
  - if they keep going
  - if the room wants a local angle
- Required sections:
  - `Todays Talking Points`
  - `What season is it currently?`
  - `Deeper Dives`
- Pronunciation and audio affordances for player names using the browser speech API
- Stronger card hierarchy so each section is immediately usable on mobile
- Stronger conversion framing and waitlist CTA without payment flow
- Believable demo data for a busy late-March sports week
- Current date rendered in-browser for the quick context panel

## Run locally

This repo has no build step. Open `index.html` directly or serve it with a basic static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

- Location preferences currently switch between a few demo profiles and fall back to Chicago by default.
- Early-access capture posts to FormSubmit's AJAX endpoint for `hello@notafan.app`.
- FormSubmit requires a one-time inbox activation on the first live submission before collection is fully active.
- Audio playback depends on browser support for `speechSynthesis`.
