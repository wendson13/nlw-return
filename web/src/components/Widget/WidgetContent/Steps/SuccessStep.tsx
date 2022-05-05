import { CloseButton } from '../../CloseButton';

type SelectStepProps = {
  onSendNewFeedback: () => void;
}

export function SuccessStep ({ onSendNewFeedback }: SelectStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center justify-center gap-2 mx-6">
        <img className="w-10 h-10" src="./success.svg" alt="green checkbox" />
        <strong
          className="text-zinc-100 text-xl leading-6 font-medium"
        >
          we appreciate feedback
        </strong>
      </div>

      <button
        className="bg-zinc-800 rounded py-2 px-6 text-zinc-100 text-sm leading-6 font-medium outline-none border-2 border-transparent focus:border-brand-500"
        onClick={onSendNewFeedback}
      >
        I want to send another
      </button>
    </>
  );
}
