import { SwitchTheme } from './components/SwitchTheme';
import { Widget } from './components/Widget';
import { ThemeContextProvider } from './context/Theme';

export function App() {
  return (
    <ThemeContextProvider>
      <SwitchTheme className='absolute top-2 right-2 p-2' />
      <Widget />
    </ThemeContextProvider>
  );
}
