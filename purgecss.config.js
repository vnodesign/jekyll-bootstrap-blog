module.exports = {
    // These are the files that Purgecss will search through
    content: ["./_site/**/*.html"],
  
    // These are the stylesheets that will be subjected to the purge
    css: ["./_site/dist/main.css"],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  };
  