import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАЕМ!!! ДЕЛАЕМ ДЛЯ КУРСА! ЧТОБЫ УВИДЕТЬ КАК ГРУЗИТЬСЯ СТРАНИЦА
  setTimeout(() => resolve(import('./MainPage')), 1500)
}));