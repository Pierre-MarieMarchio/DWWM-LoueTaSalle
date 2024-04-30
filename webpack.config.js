const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const htmlPages = [];
const pagesDir = './src/pages';

fs.readdirSync(pagesDir).forEach((dir) => {
  const htmlFiles = fs.readdirSync(`${pagesDir}/${dir}`).filter((file) => path.extname(file) === '.html');

  htmlFiles.forEach((htmlFile) => {
    const templatePath = `${pagesDir}/${dir}/${htmlFile}`;
    const outputPath = `html/${htmlFile}`;
    const cssFile = htmlFile.replace(/.html$/, '.scss');
    const cssPath = `${pagesDir}/${dir}/${cssFile}`;
    const cssChunkName = htmlFile.replace(/.html$/, '-css');

    htmlPages.push({
      template: templatePath,
      filename: outputPath,
      chunks: ['main', cssChunkName], // Utilisez un nom de chunk CSS unique pour chaque fichier
    });

    if (fs.existsSync(cssPath)) {
      htmlPages[htmlPages.length - 1].chunks.push(cssFile.replace(/\.scss$/, ''));
    }
  });
});

const htmlPlugins = htmlPages.map((page) => new HtmlWebpackPlugin(page));

const scssEntries = {};

htmlPages.forEach(({ chunks, template }) => {
  chunks.forEach((chunk) => {
    if (chunk !== 'main') {
      const dir = path.dirname(template);
      const name = path.basename(template).replace(/.html$/, '');
      if (!scssEntries[name]) {
        scssEntries[name] = `./${dir}/${name}.scss`;
      }
    }
  });
});

const config = {
  entry: {
    main: './src/main.ts',
    ...scssEntries,
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    hot: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css', // Génère les fichiers CSS dans le dossier "css"
    }),
  ].concat(htmlPlugins),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
