import { lazy } from 'react';

// export const AboutPageAsync = lazy(() => import('./AboutPage'));

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАЕМ!!! ДЕЛАЕМ ДЛЯ КУРСА! ЧТОБЫ УВИДЕТЬ КАК ГРУЗИТЬСЯ СТРАНИЦА
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
