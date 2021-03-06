module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true
      }
    }),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.vue', './public/**/*.html'],
            extractors: [
              {
                extractor: class {
                  static extract(content) {
                    return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
                  }
                },
                extensions: ['vue', 'html']
              }
            ]
          })
        ]
      : [])
  ]
};
