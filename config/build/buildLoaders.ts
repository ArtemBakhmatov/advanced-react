import MiniCssExtractPlugin, { loader } from "mini-css-extract-plugin";
import webpack from "webpack"

import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						"i18next-extract", 
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					],
				]
			}
		}
	}

	const fileLoader = {
		test: /\.(png|jpg|gif|woff2|woff)$/,
		use: [
			{
				loader: 'file-loader',
				options: {}  
			}
		]
	}

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' :	MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => Boolean(resPath.includes('.module.')), // работают файлы только с .module.scss
						localIdentName: isDev 
							? '[path][name]__[local]--[hash:base64:5]' // src-components-Counter-module__btn--WJfas
							: '[hash:base64:8]' // WJfas66Y
					}, // нужен для того чтобы использовать файлы style.module.css
					
				}
			},
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
		svgLoader, 
		// babelLoader,
		fileLoader,
		typescriptLoader, 
		cssLoader
	]
}