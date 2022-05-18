import { CircleNotch } from 'phosphor-react';

type LoadingProps = {
  className?: string;
}

export function Loading({ className }: LoadingProps) {
  return (
    <div className="animate-spin w-6 h-6">
      <CircleNotch weight="bold" className={`w-6 h-6 ${className}`} />
    </div>
  );
}
