const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy('images');

  // copy other needed files
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('manifest.json')

  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
};