/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false); // отвечает свёрнут или нет
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
      }
    >
      <button
        type="button"
        onClick={onToggle}
      >
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwitcher className="" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
