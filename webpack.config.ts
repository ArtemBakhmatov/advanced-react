import webpack from "webpack"; // для доступа к встроенным плагинам
import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
	mode: 'development',
	paths,
	isDev
});

export default config; 

// __dirname -> эта папка в котором находимся в данный момент
// 'development' -> режим разработки
// 'production' -> режим сжатого кода
// HtmlWebpackPlugin -> нужен для index.html