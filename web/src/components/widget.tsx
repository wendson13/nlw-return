import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

export function Widget () {
  return (
    <Popover className="absolute bottom-4 right-4 group">
      <Popover.Panel>Content popover</Popover.Panel>

      <Popover.Button
        className="flex items-center p-4 rounded-full text-white bg-brand-500"
      >
        <ChatTeardropDots className="w-10 h-10" />

        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all ease-linear duration-500">
          <span className="text-xl font-medium">Feedback</span>
        </div>

      </Popover.Button>
    </Popover>
  );
}
