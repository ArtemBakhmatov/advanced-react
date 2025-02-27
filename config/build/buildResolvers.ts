import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // путь к файлу без расширения ('./component.ts' -> './component')
    preferRelative: true, // абсолютные пути в приоритете
    modules: [options.paths.src, 'node_modules'], // сначала будет проверяться директория src,
    // и если модуль не найден там, то webpack перейдет к поиску в node_modules.
    mainFiles: ['index'], // webpack будет автоматически искать и использовать этот файл при импорте.
    // то есть index.ts , где мы пишем экспорты и импорты
    alias: {}, // например '@components': 'src/components', но у нас пока alias ничего нет
  };
}
