# EnMod/css-themes

My CSS themes for terminals, UIs, and programs.

This repo contains my source files and the dev environment I use to hack them into usable themes!

## How do I get started working with this locally?

I'm using the following tools in this repo:

- [Gulp.js](https://gulpjs.com/docs/en/getting-started/quick-start)
- [Node.js](https://nodejs.org/en/)

As long as those two tools have their latest stable versions installed, the below steps should go smoothly!

1. Clone down this repo
2. Run `npm i` in the repo root to install dependencies
3. Add a script in `package.json` that exports variables you need/want:

   - `TARGET`: **Required.** Name of your target program/thing. will choose a folder from the project root to start in.
   - `SRC`: **Optional.** Sets the filename of your source file **without extension.** `gulpfile.js` assumes `theme` if this isn't provided.

   For example, to start working on the `so3.css` Obsidian theme in this repo, this script works:
   `"dev:obs:so3": "TARGET=obsidian SRC=so3 gulp"`

4. Set up an `.env` file that has your destination paths with target included after an underscore, like `DEST_someTarget`. If _not_ using the default source file `theme.css`, tack on the filename without extension.

   Some example keys to demonstrate:

   For a `new-theme.css` file in a `someTarget` folder:
   `DEST_someTarget_new-theme=/path/to/destination`

   For just the default `theme.css` file in this repo's `obsidian` folder:
   `DEST_obsidian=path/to/destination`

5. Edit the `expectedFilenames` object in `gulpfile.js` to reflect what filename your target expects to use. If someTarget expects `user.theme.css`, `expectedFilenames` would include:
   `someTarget: 'user.theme.css'`

6. Finally, run your script to start Gulp and get your CSS compiling!
