FOCUS: Just get things working.


## Features
> ScaleInfoGuitar
        > Add numbers below frets
        > Highlight 'significant notes' to fretboard
        > Popup to change Tuning (see usePopup)
        > Fix overflow on right side when zoomed

> ScaleInfoScale
        > Add numbers for chords

> Create `usePopup` hook
        A hook that allows me to define a contents parameter (some JSX).
        When hook is called, probably with an onClick, a popup will appear
        at position of mouse, with content inside.
        Popup will disappear when user clicks X, or outside of the box.

## Bug Fixes
> Fix iOS display issues
> ScaleInfoScale - Chord Name clipping when scaled

## Long-run Goals
> Make elements modular
        - Add/remove components
            Guitar, Piano, Saxaphone, etc.
        - Allow to reorder via drag / dropping