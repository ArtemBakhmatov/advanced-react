# 2. Router, App Layout, i18n, eslint, stylelint, jest
## Команды в терминале.
шаблон:

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={ classNames(cls.navbar, {}, [className]) }>
      
    </div>
  );
};

npm i -D @svgr/webpack@6.2.1
npm i -D file-loader@6.2.0

npm i react-i18next@11.15.5 i18next@21.6.11
npm i i18next-http-backend@1.3.2 i18next-browser-languagedetector@6.1.3

npm i -D babel-loader@8.2.3 @babel/core@7.17.5
npm i -D babel-plugin-i18next-extract@0.8.3

файл babel.config.json он нужен только для i18, но мы его не стали использовать, можно его удалить
он сейчас никакого смысла не имеет

npm i -D eslint@8.10.0

npm init @eslint/config 
выбираем To check syntax and find problems, and enforce code style
далее выбираем JavaScript modules (import/export)
далее React 
далее Yes (так используем typeScript)

не стал использовать npm init @eslint/config, просто установил нужные пакеты

npm i -D eslint-config-airbnb@19.0.4
npm i -D eslint-plugin-i18next@5.1.2
npm i -D eslint-plugin-import@2.25.4
npm i -D eslint-plugin-jsx-a11y@6.5.1
npm i -D eslint-plugin-react@7.29.2
npm i -D eslint-plugin-react-hooks@4.3.0
npm i -D @typescript-eslint/eslint-plugin@5.12.1
npm i -D @typescript-eslint/parser@5.12.1

npx eslint "**/*.{ts,tsx}"

npm i -D stylelint@14.5.3 stylelint-config-standard-scss@3.0.0