import CleanCSS from "clean-css";

export default function (eleventyConfig) {
  // Output directory: _site

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy('images');

  // copy other needed files
  eleventyConfig.addPassthroughCopy('favicon.ico');
  eleventyConfig.addPassthroughCopy('manifest.json');

  eleventyConfig.addFilter("cssmin", function (code) {
    const output = new CleanCSS({
      level: {
        2: {
          // https://www.npmjs.com/package/clean-css#level-2-optimizations
          all: true, // sets all level 1 and 2 optimization values to `true`
        }
      }
    }).minify(code);

    console.log('******css min perf*******');

    console.log('original size', output.stats.originalSize); // original content size after import inlining
    console.log('minified size', output.stats.minifiedSize); // optimized content size
    console.log('efficiency', output.stats.efficiency); // `(originalSize - minifiedSize) / originalSize`, e.g. 0.25 if size is reduced from 100 bytes to 75 bytes

    return output.styles;
  });
};