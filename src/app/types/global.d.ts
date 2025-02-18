declare module '*.scss' { 
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
} // нужен для того чтобы работали импорты scss (import classes  from './Counter.module.scss';)