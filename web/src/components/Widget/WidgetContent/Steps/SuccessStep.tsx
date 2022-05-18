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
          className="text-primary-light text-xl leading-6 font-medium dark:text-primary-dark"
        >
          we appreciate feedback
        </strong>
      </div>

      <button
        className="bg-surface-secondary-light rounded py-2 px-6 text-primary-light text-sm leading-6 font-medium outline-none border-2 border-transparent focus:border-brand-500 dark:text-primary-dark dark:bg-surface-secondary-dark"
        onClick={onSendNewFeedback}
      >
        I want to send another
      </button>
    </>
  );
}
