type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}

// можно было сделать так чтобы
// export function classNames(cls: string, mods?: Mods, additional?: string[]): string
// classNames('remove-btn', { hovered: true, selectable: true }, ['pdg']);

// 'remove-btn hovered selectable pdg' -> вот так будут выглядеть классы в html

// cls: string -> принимает какой то главный класс например .app
// mods -> объект с модами, ключ это название класса
// additional: string[] -> дополнительные классы

// Object.entries(mods) -> можем получить как ключи , так и значения у объекта
// filter(([key, value]) => Boolean(true)) -> оставляем только те элементы которые равны true,
// например hovered: true
// и тут нас интересуют значения (value)

// .map(([key, value]) => key) => тут нас интересует ключ и мы этот ключ возвращаем (key),
// ключи это название классов
// .map(([className]) => className) -> немного переписали , но это ничего меняет
