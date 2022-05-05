import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton () {
  return (
    <Popover.Button className="absolute top-4 right-4 rounded text-zinc-500 hover:text-zinc-100 outline-none border-2 border-transparent focus:border-brand-500" title="close feedback form">
      <X weight="bold" className="w-6 h-6" />
    </Popover.Button>
  );
}
