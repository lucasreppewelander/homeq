import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';


module.exports = (ENV = 'development') => ({
	mode: ENV === 'production' ? 'production' : 'development',
	entry: './src',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',	
	devServer: {
		contentBase: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]"  
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(svg|jpg|png)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				ENV: JSON.stringify(ENV)
			}
		}),
		new HtmlPlugin({
			template: './assets/template.html',
			options: {
				minimize: true
			}		
		})
	]
});
