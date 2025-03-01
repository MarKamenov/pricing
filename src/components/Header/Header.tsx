import { Moon, Sun } from 'lucide-react';

import styles from './Header.module.scss';
import { useTheme } from '../../contexts';
import { Button } from '../Button';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <Button variant='secondary'
        onClick={toggleTheme}
        ariaLabel={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
      >
        {theme === 'light' ? <Moon /> : <Sun />}
      </Button>
    </header>
  );
};