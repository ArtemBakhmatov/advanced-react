import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack"; // для доступа к встроенным плагинам

const config: webpack.Configuration = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.ts'), // стартовая точка нашего приложения
	output: {
		filename: '[name].[contenthash].js',	// название файла готового приложения
		path: path.resolve(__dirname, 'build'), // куда будет делаться сборка, build -> это папка
		clean: true, // чистит не нужные файлы в папке build
	}, // куда будем делать сборку нашего приложения
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html') // откуда берем шаблон это public/index.html
		}), // в папке build создается файл index.html
		new webpack.ProgressPlugin() // предоставляет отчет о компиляции
	],
	module: {
    rules: [ // обрабатывают файлы за рамки js, то есть ts, img и т.д.
      {
        test: /\.tsx?$/, // будет обрабатывать файлы ts и tsx (https://regex101.com)
        use: 'ts-loader', // даёт возможность чтобы работал ts
        exclude: /node_modules/, /// исключаем node_modules
      }, 
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // путь к файлу без расширения ('./component.ts' -> './component')
  },
}

export default config; 

// __dirname -> эта папка в котором находимся в данный момент
// 'development' -> режим разработки
// 'production' -> режим сжатого кода
// HtmlWebpackPlugin -> нужен для index.html