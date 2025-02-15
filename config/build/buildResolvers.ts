import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // путь к файлу без расширения ('./component.ts' -> './component')
	}
}
