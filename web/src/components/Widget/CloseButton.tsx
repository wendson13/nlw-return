import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

export function CloseButton () {
  return (
    <Popover.Button className="absolute top-4 right-4 rounded text-secondary-light hover:text-primary-light outline-none border-2 border-transparent focus:border-brand-500 dark:text-secondary-dark dark:hover:text-primary-dark" title="close feedback form">
      <X weight="bold" className="w-6 h-6" />
    </Popover.Button>
  );
}
