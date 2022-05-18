import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from './Loading';

type ScreenshotButtonProps = {
  isEnable?: boolean;
  screenshot: string;
  onTakeScreenshot: (screenshot: string) => void;
}

export function ScreenshotButton({ isEnable, screenshot, onTakeScreenshot }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onTakeScreenshot(base64Image);
    setIsTakingScreenshot(false);
  };

  if (screenshot) {
    return (
      <button
        type="button"
        className="relative flex justify-end  items-end p-0.5 w-12 h-10 rounded text-primary-light hover:text-secondary-light outline-none ring-brand-500 ring-offset-surface-secondary-light ring-offset-2 focus:ring-2 disabled:opacity-40 disabled:hover:bg-zinc-800 dark:text-secondary-dark dark:hover:text-primary-dark dark:ring-offset-surface-secondary-dark"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        onClick={() => onTakeScreenshot('')}
      >
        <div className="absolute top-0 left-0 right-0 rounded bottom-0 bg-gradient-to-t from-stroke-light dark:from-stroke-dark" />
        <Trash weight='fill' className="z-10 w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      className="flex justify-center items-center p-0.5 w-12 h-10 rounded bg-surface-secondary-light text-primary-light hover:bg-surface-secondary-hover-light transition-colors outline-none ring-brand-500 ring-offset-surface-secondary-light ring-offset-2 focus:ring-2 disabled:opacity-40 disabled:hover:bg-zinc-800 dark:text-primary-dark dark:ring-offset-surface-secondary-dark dark:hover:bg-surface-secondary-hover-dark dark:bg-surface-secondary-dark"
      type="button"
      onClick={handleTakeScreenshot}
      disabled={isEnable}
    >
      {!isTakingScreenshot ? <Camera className="w-6 h-6" /> : <Loading className="text-primary-light dark:text-primary-dark" />}
    </button>
  );
}
