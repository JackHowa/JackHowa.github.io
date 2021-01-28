module.exports = function (eleventyConfig) {
  // Output directory: _site

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy('images');

  // copy other needed files
  eleventyConfig.addPassthroughCopy('favicon.ico')
  eleventyConfig.addPassthroughCopy('manifest.json')

  // Copy `css/fonts/` to `_site/css/fonts`
  // If you use a subdirectory, it’ll copy using the same directory structure.
  // eleventyConfig.addPassthroughCopy("css/fonts");
};