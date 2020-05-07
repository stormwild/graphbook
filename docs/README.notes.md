# Notes

## Setup

## Install Babel Webpack EsLint

```sh
yarn add --dev \
@babel/core \
@babel/preset-env \
@babel/preset-react \
@babel/plugin-proposal-decorators \
@babel/plugin-proposal-function-sent \
@babel/plugin-proposal-export-namespace-from \
@babel/plugin-proposal-numeric-separator \
@babel/plugin-proposal-throw-expressions \
@babel/plugin-proposal-class-properties \
webpack \
webpack-cli \
webpack-dev-server \
eslint \
babel-eslint \
babel-loader \
clean-webpack-plugin \
css-loader \
file-loader \
html-webpack-plugin \
style-loader \
url-loader
```

## Install EsLint Peer Dependencies

```sh
npx install-peerdeps --dev eslint-config-airbnb
```

## Create `.eslintrc`

```json
{
  "extends": ["airbnb"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "react/jsx-filename-extension": "off"
  }
}
```

## Setup Client Side Webpack

`webpack.client.babel.config.js`

```js
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const buildDirectory = 'dist';
const outputDirectory = buildDirectory + '/client';

const config = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, outputDirectory),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: [buildDirectory] }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config;
```

## Create Client Index

```sh
mkdir -p src/client
touch src/client/index.js
```

## Create Scripts in `package.json`

Make sure to install babel register to allow use of imports in webpack config

```sh
yarn add --dev @babel/register
```

```json
{
  "scripts": {
    "start": "webpack-dev-server --devtool inline-source-map --hot --mode development --config webpack.client.config.babel.js",
    "build:client": "webpack --config webpack.client.config.babel.js -p"
  }
}
```

## Set Additional Features Not Supported by te Presets

```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    ["@babel/plugin-proposal-class-properties", { "loose": false }]
  ],
  "presets": ["@babel/env", "@babel/react"]
}
```

## References

Excerpt From: Sebastian Grebe. “Hands-On Full-Stack Web Development with GraphQL and React.” Apple Books.
