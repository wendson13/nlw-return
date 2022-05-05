import html2canvas from 'html2canvas';
import { Camera, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Loading } from './Loading';

type ScreenshotButtonProps = {
  isEnable?: boolean;
  screenshot: string;
  onTakeScreenshot: (screenshot: string) => void;
}

export function ScreenshotButton ({ isEnable, screenshot, onTakeScreenshot }: ScreenshotButtonProps) {
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
        className="relative flex justify-end  items-end p-0.5 w-12 h-10 rounded text-zinc-400 hover:text-zinc-100 outline-none ring-brand-500 ring-offset-zinc-900 ring-offset-2 focus:ring-2 disabled:opacity-40 disabled:hover:bg-zinc-800"
        style={{
          backgroundImage: `url(${screenshot})`
        }}
        onClick={() => onTakeScreenshot('')}
      >
        <div className="absolute top-0 left-0 right-0 rounded bottom-0 bg-gradient-to-t from-zinc-800" />
        <Trash weight='fill' className="z-10 w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      className="flex justify-center items-center p-0.5 w-12 h-10 rounded bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors outline-none ring-brand-500 ring-offset-zinc-900 ring-offset-2 focus:ring-2 disabled:opacity-40 disabled:hover:bg-zinc-800"
      type="button"
      onClick={handleTakeScreenshot}
      disabled={isEnable}
    >
      {!isTakingScreenshot ? <Camera className="w-6 h-6" /> : <Loading />}
    </button>
  );
}
