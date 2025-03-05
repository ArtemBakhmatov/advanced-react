import { Button, ThemeButton } from '../../Button/Button';
import { useTheme, Theme } from '../../../../app/providers/ThemeProvider/index';
import DarkIcon from '../../../assets/icons/theme-dark.svg';

import LightIcon from '../../../assets/icons/theme-light.svg';
import { classNames } from '../../../lib/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
    </Button>
  );
};
