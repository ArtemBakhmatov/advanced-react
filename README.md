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