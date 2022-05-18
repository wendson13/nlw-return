import { useEffect } from 'react';
import { SwitchTheme } from './components/SwitchTheme';
import { Widget } from './components/Widget';

type Theme = 'light' | 'dark';

export function App() {
  const setDefaultTheme = () => {
    const themeStorage = localStorage.getItem('widFeed@theme') as Theme | null;
    console.log(themeStorage);
    const theme = themeStorage || 'light';

    if (themeStorage) {
      document.documentElement.classList.add(theme);
    } else {
      const userPrefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

      document.documentElement.classList.add(userPrefersTheme);
      localStorage.setItem('widFeed@theme', userPrefersTheme);
    }
  };

  useEffect(() => {
    setDefaultTheme();
  }, []);

  return (
    <>
      <SwitchTheme className='absolute top-2 right-2 p-2' />
      <Widget />
    </>
  );
}
