import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			"style-loader",
			// Translates CSS into CommonJS
			"css-loader",
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	// если не используем typeScript - нужен babel-loader
	const typescriptLoader = {
		test: /\.tsx?$/, // будет обрабатывать файлы ts и tsx (https://regex101.com)
		use: 'ts-loader', // даёт возможность чтобы работал ts
		exclude: /node_modules/, /// исключаем node_modules
	}

  return [ // обрабатывают файлы за рамки js, то есть ts, img и т.д.
		typescriptLoader, 
		cssLoader
	]
}