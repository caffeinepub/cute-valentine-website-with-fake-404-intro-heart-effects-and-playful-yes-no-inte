# Specification

## Summary
**Goal:** Build a cute Valentine website that always shows a fake 404 screen first on refresh, then transitions into a Valentine prompt with heart effects and a playful Yes/No interaction leading to a blue-heart success message.

**Planned changes:**
- Implement a two-step, single-URL flow: show a fake “404” screen immediately on full page refresh, then automatically transition (after a short delay or single “Go back” action) to the Valentine prompt screen.
- Create the Valentine prompt screen with the exact text “Will you be my valentine?” and smooth, continuous animated heart effects.
- Add “Yes” and “No” buttons near each other: “Yes” is clickable and triggers the acceptance flow; “No” evades interaction by moving away on hover/tap attempts so it cannot be clicked on desktop or mobile.
- On “Yes”, replace the prompt with a success screen showing exactly “I Love you Karuvaya.” and a visually distinct blue heart effect/animation.
- Apply a cohesive cute, warm-toned Tailwind theme across all screens (avoid blue/purple dominance except for the final blue heart effect).

**User-visible outcome:** On refresh, users see a fake 404 first, then a cute Valentine prompt with heart animations and playful buttons; clicking “Yes” reveals “I Love you Karuvaya.” with a blue heart animation while “No” remains effectively unclickable.
