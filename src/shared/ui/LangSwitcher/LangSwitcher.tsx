import { useTranslation } from 'react-i18next';
import { classNames } from '../../lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggle}
      theme={ThemeButton.CLEAR}
    >
      { t('Язык') }
    </Button>
  );
};
