const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	name: 'For dev',
	mode: 'development',
	devtool: 'eval',
	resolve: {
		extensions: [ '.jsx', '.js' ],
		alias: {
			'react-dom': '@hot-loader/react-dom'
		},
		modules: [ path.resolve(__dirname, '../src'), 'node_modules' ]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html', filename: 'index.html' }),
		new MiniCssExtractPlugin({ filename: 'style.css' })
	],
	devServer: {
		contentBase: path.resolve('dist'),
		index: 'index.html',
		port: 3000,
		historyApiFallback: true,
		proxy: {
			'/api/': {
				target: 'http://localhost:4000',
				changeOrigin: true
			}
		}
	},
	entry: {
		app: [ '@babel/polyfill', './src/index', './src/styles/reduction.scss' ]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: false
						}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /node_modules/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	},
	output: {
		path: path.join(__dirname + '../dist'),
		filename: 'app.js'
	}
};
