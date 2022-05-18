import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Moon, Sun } from 'phosphor-react';
import { useTheme } from '../context/Theme';

type SwitchThemeProps = {
  className?: string;
}

export function SwitchTheme({ className }: SwitchThemeProps) {
  const { theme, handleChangeTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const handleChangeSwitch = () => {
    handleChangeTheme();

    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={className}>
      <Switch
        checked={isDarkMode}
        onChange={handleChangeSwitch}
        className={`${isDarkMode ? 'bg-stroke-dark' : 'bg-stroke-light'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-100 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-brand-500 focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">change current {theme} theme</span>
        <span
          aria-hidden="true"
          className={`${isDarkMode ? 'translate-x-9' : 'translate-x-0'}
            flex justify-center items-center
            pointer-events-none h-[34px] w-[34px] transform rounded-full bg-brand-300 shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
          {
            isDarkMode
              ? <Moon size={26} className="text-white" alt="Moon white icon" />
              : <Sun size={26} className="text-white" alt="Sun white icon" />
          }
        </span>
      </Switch>
    </div>
  );
}
