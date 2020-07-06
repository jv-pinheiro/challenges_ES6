module.exports = {
	entry: './scriptDoJV.js',
	output: {
		path: __dirname,
		filename:'final.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:	'babel-loader',
				}
			}
		],
	},
};