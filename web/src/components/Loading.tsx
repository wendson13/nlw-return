import { CircleNotch } from 'phosphor-react';

export function Loading () {
  return (
    <div className="animate-spin w-6 h-6">
      <CircleNotch weight="bold" className="w-6 h-6"/>
    </div>
  );
}
