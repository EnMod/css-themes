# [Obsidian](https://obsidian.md) Themes

These have some small requirements before usage in your vault(s):

- Theme destinations should be set to one of two places, depending on the type of theme:
  - Companion: `/path/to/vault/.obsidian/snippets` Once added there, they can be activated via Settings > Appearance > CSS snippets. Their companion theme can be switched-to via Settings > Appearance > Theme once that theme installed.
  - Full: `/path/to/vault/.obsidian/themes` Once copied to that folder, they can be chosen via Settings > Appearance > Theme
- Switch your Appearance (in Settings > Appearance) to whatever appearance is below the themes' headings.

Each theme's heading links to its raw CSS; alternatively, browse and/or download the desired CSS in the `out` folder.

These are currently stable in `0.10.8`. As Obsidian rapidly develops and approaches `1.0.0` they might break! Use with caution.

## [Initial](https://raw.githubusercontent.com/EnMod/css-themes/master/obsidian/out/initial.css)

Type: Companion (to [Minimal](https://github.com/kepano/obsidian-minimal))
Appearance: Dark

This theme exemplifies some of the styling choices for my personal design system.

It's meant to be used with the [Minimal](https://github.com/kepano/obsidian-minimal) Obsidian theme as a base as well as its companion [Minimal Theme Settings](https://github.com/kepano/obsidian-minimal-settings) plugin.

<details>
<summary>My preferred Minimal theme settings for Initial:</summary>

### Main settings
- Accent color hue: Slightly left of center
- Accent color saturation: around...35% of the slider from the left
- Fancy cursor: ✅
- Use system-level setting for light or dark mode: ❌
- Light mode style: Low contrast
- Sidebar borders: ✅
- Focus mode: ✅
- Underline internal links: ✅
- Underline external links: ✅
- Line width: 45
- Body font size: 22
- Sidebar font size: 14
- Folding Editor offset: ❌
- Relationship lines in Preview: ❌
- Relationship lines in Preview: ❌

### Custom Fonts
- Custom text font: [Lustria](https://fonts.google.com/specimen/Lustria)
- Custom editor font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Custom monospace font: [JetBrains Mono](https://www.jetbrains.com/lp/mono/)

</details>

Additional fonts:
- [Questrial](https://fonts.google.com/specimen/Questrial) for headings
- [Noto Sans](https://fonts.google.com/specimen/Noto+Sans) for UI

## [Sulfur Trioxide](https://raw.githubusercontent.com/EnMod/css-themes/master/obsidian/out/so3.css)

Type: Full
Appearance: Dark

A theme intending to emulate the user interface of [Star Ocean: Till the End of Time](https://en.wikipedia.org/wiki/Star_Ocean:_Till_the_End_of_Time).

![so3-preview](../screenshots/so3-preview.png)
![so3-edit](../screenshots/so3-edit.png)

## [Sulfur Trioxide: Dictionary](https://raw.githubusercontent.com/EnMod/css-themes/master/obsidian/out/so3-dict.css)

Type: Full
Appearance: Dark

A modification of Sulfur Trioxide to better align with [Star Ocean: Till the End of Time](https://en.wikipedia.org/wiki/Star_Ocean:_Till_the_End_of_Time)'s Dictionary feature. Obsidian's workflow reminds me of it, so I thought this would be a fitting, fun way to learn Obsidian theming!

This was made for [my implementation of that feature as an Obsidian vault](https://github.com/EnMod/obsidian-so3-dictionary).

![so3-dict](../screenshots/so3-dict.png)
