/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/Button/Button';
import { LangSwitcher } from '../../../../shared/ui/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from '../../../../shared/ui/ThemeSwitcher/index';
import { classNames } from '../../../../shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false); // отвечает свёрнут или нет
  const { t } = useTranslation();
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={
        classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className || ''])
      }
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={onToggle}
      >
        { t('Переключить') }
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher className="" />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
