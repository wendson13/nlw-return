import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';
import { WidgetContent } from './WidgetContent';

export function Widget () {
  return (
    <Popover className="flex flex-col items-end absolute bottom-4 right-4 group">
      <Popover.Panel>
        <WidgetContent />
      </Popover.Panel>

      <Popover.Button
        className="flex items-center p-4 rounded-full text-white bg-brand-500 outline-none ring-offset-2 ring-offset-zinc-800 focus:ring-2 focus:ring-brand-500"
      >
        <ChatTeardropDots className="w-10 h-10" />

        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all ease-linear duration-500">
          <span className="text-xl font-medium">Feedback</span>
        </div>

      </Popover.Button>
    </Popover>
  );
}
