const dotenv = require('dotenv').config()

const { src, dest, watch } = require('gulp')
const rename = require('gulp-rename')

const postcss = require('gulp-postcss')
const postcssNested = require('postcss-nested')
const postcssImport = require('postcss-import')

// What filename does the target program expect to use?
const expectedFilenames = {
  obsidian: 'obsidian.css',
}

const source = process.env.SRC || 'theme'
const sourcePath = `./${process.env.TARGET}/src/${source}.css`

let destination = `./${process.env.TARGET}/out/${source}.css`

// If there are any specific paths set in the .env, use those
if (process.env[`DEST_${process.env.TARGET}_${process.env.SRC}`]) {
  destination = process.env[`DEST_${process.env.TARGET}_${process.env.SRC}`]
} else if (process.env[`DEST_${process.env.TARGET}`]) {
  destination = process.env[`DEST_${process.env.TARGET}`]
}

function compile() {
  const plugins = [postcssImport(), postcssNested()]

  return (
    src(sourcePath)
      .pipe(postcss(plugins))
      .pipe(
        // No expected file rename in expectedFilenames for the target? Just use the source
        rename(expectedFilenames[process.env.TARGET] || `${source}.css`)
      )
      .pipe(
        dest(destination, {
          overwrite: true,
        })
      )
      // Copies the file to out also, for hosting in the repo
      .pipe(rename(`${source}.css`))
      .pipe(
        dest(`./${process.env.TARGET}/out/`, {
          overwrite: true,
        })
      )
  )
}

exports.default = function () {
  watch(sourcePath, compile)
}
