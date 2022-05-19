import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Loading } from '../components/Loading';

type Theme = 'dark' | 'light';

type ThemeContextProps = {
  theme: Theme;
  handleChangeTheme: () => void;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>();

  const setDefaultTheme = () => {
    const userPrefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    document.documentElement.classList.add(userPrefersTheme);
    localStorage.setItem('feedGet@theme', userPrefersTheme);
    setTheme(userPrefersTheme);
  };

  const handleChangeTheme = () => {
    if (!theme) return undefined;

    if (theme === 'light') {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add('dark');

      localStorage.setItem('feedGet@theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add('light');

      localStorage.setItem('feedGet@theme', 'light');
      setTheme('light');
    }
  };

  useEffect(() => {
    setDefaultTheme();
  }, []);

  if (!theme) {
    return (
      <Loading />
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const value = useContext(ThemeContext);

  return value;
};
