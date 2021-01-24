const dotenv = require('dotenv').config()

const { src, dest, watch } = require('gulp')
const rename = require('gulp-rename')

const postcss = require('gulp-postcss')
const postcssNested = require('postcss-nested')
const postcssImport = require('postcss-import')

// What filename does the target program expect to use?
const expectedFilenames = {}

const source = process.env.SRC || 'theme'
const sourcePath = `./${process.env.TARGET}/src/${source}.css`

let destinationPath = `./${process.env.TARGET}/out/`

// If there are any custom paths set in the .env, use those
const customLabeledDest = process.env[`DEST_${process.env.TARGET}_${process.env.SRC}`]
const customUnlabeledDest = process.env[`DEST_${process.env.TARGET}`]

if (customLabeledDest) destinationPath = customLabeledDest
else if (customUnlabeledDest) destinationPath = customUnlabeledDest

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
        dest(destinationPath, {
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
  watch(sourcePath, {ignoreInitial: false, usePolling: true}, compile)
}
