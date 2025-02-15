import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {
	const typescriptLoader = {
		test: /\.tsx?$/, // будет обрабатывать файлы ts и tsx (https://regex101.com)
		use: 'ts-loader', // даёт возможность чтобы работал ts
		exclude: /node_modules/, /// исключаем node_modules
	}

  return [ // обрабатывают файлы за рамки js, то есть ts, img и т.д.
		typescriptLoader, 
	]
}