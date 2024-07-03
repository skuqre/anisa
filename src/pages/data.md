---
layout: ../layouts/md.astro
---

# Data

Anisa has some data that are more for style than actual useful information. They're mainly JSONs and you are free to use them for whatever stuff you want.

## Colors

`https://skuqre.github.io/anisa/data/colors.json`

- You can get the little accent color every NIKKE has.
- The color may change for every update, as NIKKE runs a noise filter over the screen when getting the colors.
- If you want to get the colors yourself, I use a script to do so: [NIKKE Flavor Colors](https://github.com/skuqre/nikke-flavor-colors)


## Every advise transcript

`https://skuqre.github.io/anisa/data/advise-scripts/<Prydwen Character Slug>.json`

- You can get the 20 advise transcripts for a character.
- To normalize names, the files use Prydwen slugs.
    - To get Prydwen slugs, you can: <br>
    a.) [Make a direct HTTP request to them](https://www.prydwen.gg/page-data/nikke/characters/page-data.json) and sort it yourself <br>
    b.) Do guesses. Anis is, well `anis` and Snow White: Innocent Days is `innocent-dayss-snow-white`. <br>
    c.) Get it from their respective links manually. The slugs are located at the end of their page URL (e.g. [<code>https://prydwen.gg/nikke/characters/<u>anis</u></code>](https://prydwen.gg/nikke/characters/anis))

### Object Info

#### `adviseScripts`

An array with size `20` that contains arrays of advise transcripts that contain "Dialogue Object"s.

#### `scriptLastUpdate`

A string containing the date of last update. Date is in UTC+8.

#### Dialogue Object

```
{
    "id": "d_counseling_anis_01_1",
    "type": "Speech",
    "text": "We're not in the commander's room anymore!",
    "speaker": "Anis",
    "points": null,
    "jumpTo": null
}
```

- **id**: A string that contains the Dialogue ID.
    - When split with `_`, the array is as follows:
        0. Trash data.
        1. Trash data.
        2. NIKKE, though very unreliable, as characters like Scarlet: Black Shadow is `hongryeon_blackshadow`, etc.
        3. Advise number. Can only be 1 to 20 with padding from the start needed. **Always starts at 1**.
        4. Dialogue number. Varies for every question, and can be used to keep track when making a dialogue system. **Always starts at 1**.
- **type**: A string that can be of 5 values
    1. Speech
        - For every **Speech**, there *should* be a valid value in the `speaker` field.
    2. Self
        - One liner choices. Those times where you literally have to pick one choice for some reason.
    3. Narration
        - Narration. Those times when the black box with the text shows up.
    4. Monologue
        - Similar to Narration, except the text is talking in the first person.
    5. Choice
        - For every choice, there is a valid object in `points` and `jumpTo`
        - There *should* be at least 2 of these objects in an advise transcripts. They should also be next to each other in the array.
- **text**: The dialogue displayed.
- **speaker**: The speaker -- the text above the dialogue in the UI.
- **points**: Can be `null`, `120` (Good answer), `100` (Bad answer)
- **jumpTo**: A string that contains a Dialogue ID to "jump"/skip to.

## `DEPRECATED` Advise contexts

`https://skuqre.github.io/anisa/data/advise-contexts.json`

do not use this lmao just use the new advise transcript system instead thanks