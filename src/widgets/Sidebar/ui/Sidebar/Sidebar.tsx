import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false); // отвечает свёрнут или нет
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div 
      className={ classNames(cls.Sidebar, {[cls.collapsed]: collapsed }, [className]) }
    >
      <button onClick={ onToggle }>toggle</button>
      <div className={ cls.switchers }>
        <ThemeSwitcher className={''} />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};