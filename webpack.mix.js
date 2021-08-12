const mix = require('laravel-mix');
const StylelintPlugin = require('stylelint-webpack-plugin');

require('laravel-mix-tailwind');

mix.setPublicPath('./dist/assets');
mix.setResourceRoot('../');

mix
  .webpackConfig({
    plugins: [
      new StylelintPlugin({
        configFile: './.stylelintrc',
        context: './resources/styles',
        files: '**/*.css',
      }),
    ]
  });

mix
  .postCss('./resources/styles/app.css', 'styles')
  .options({
    postCss: [
      require('postcss-import'),
      require('postcss-preset-env')({ stage: 1 }),
    ],
  })
  .tailwind();
