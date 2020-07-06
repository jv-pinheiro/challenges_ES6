module.exports = {
	entry: ['@babel/polyfill', './src/scriptDoJV.js'],
	output: {
		path: __dirname + '/public',
		filename: 'mounted.js',
	},
	devServer:{
		contentBase: __dirname + '/public'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		],
	},
};