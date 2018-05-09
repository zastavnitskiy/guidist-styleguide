const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'
const {version} = require('./package.json');

module.exports = {
	plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `[name].${version}.css`,
			chunkFilename: `[name].${version}.css`,
			path: path.resolve(__dirname, 'dist')
    })
  ],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',

				options: {
					presets: [['env'], ['react']],
					plugins: [
						["transform-class-properties", { "spec": true }]
					  ]
				}
			},
			{
				test: /\.css$/,

				use: [
					{
						loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true,
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
					}
				]
			}
		]
	},

	entry: './src/index.js',

	output: {
		filename: `[name].${version}.js`,
		chunkFilename: `[name].${version}.js`,
		path: path.resolve(__dirname, 'dist')
	}
};
