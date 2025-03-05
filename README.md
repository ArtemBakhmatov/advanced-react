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

npm i -D webpack-bundle-analyzer@4.5.0
npm i -D @types/webpack-bundle-analyzer@4.4.1

npm i -D @testing-library/react@12.1.3
npm i -D @testing-library/jest-dom@5.16.2
npm i -D @babel/preset-typescript@7.16.7
npm i -D @babel/preset-react@7.16.7
npm i -D identity-obj-proxy@3.0.0
npm i -D regenerator-runtime@0.13.9

При написании тестов , абсолютные импорты ругались, так что где писал тесты я использовал относительные 
импорты

npm i -D @storybook/addon-actions@6.4.19
npm i -D @storybook/addon-essentials@6.4.19
npm i -D @storybook/addon-interactions@6.4.19
npm i -D @storybook/addon-links@6.4.19
npm i -D @storybook/builder-webpack5@6.4.19
npm i -D @storybook/manager-webpack5@6.4.19
npm i -D @storybook/react@6.4.19
npm i -D @storybook/testing-library@0.0.9


