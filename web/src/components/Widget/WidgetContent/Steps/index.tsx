import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { ContentOptionsKeyType, ContentOptions } from '..';
import { api } from '../../../../lib/api';
import { Loading } from '../../../Loading';
import { ScreenshotButton } from '../../../ScreenshotButton';
import { CloseButton } from '../../CloseButton';

type StepProps = {
  currentStep: ContentOptionsKeyType;
  onToBack: () => void;
  onSendFeedback: (isSending: boolean) => void;
}

export function Steps({ currentStep, onToBack, onSendFeedback }: StepProps) {
  const step = ContentOptions[currentStep];
  const [feedback, setFeedback] = useState('');
  const [screenshot, setScreenshot] = useState('');
  const [isSubmittingFeedback, setIsSubmittingFeedback] = useState(false);

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();

    if (isSubmittingFeedback) return;

    setIsSubmittingFeedback(true);

    await api.post('feedbacks', {
      type: currentStep,
      comment: feedback,
      screenshot
    });

    onSendFeedback(true);
    setIsSubmittingFeedback(false);
  };

  return (
    <>
      <header className="flex items-center text-xl leading-6 text-primary-light font-medium dark:text-primary-dark">
        <button
          className="absolute top-4 left-4 text-secondary-light  hover:text-primary-light outline-none border-2 border-transparent rounded focus:border-brand-500 dark:text-secondary-dark dark:hover:text-primary-dark" title="go back feedback selecting"
          onClick={onToBack}
        >
          <ArrowLeft weight="bold" className="w-6 h-6" />
        </button>

        <strong className="flex gap-2 items-center">
          <img src={step.image.source} alt={step.image.alt} className="w-6 h-6" />
          <span>{step.title}</span>
        </strong>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="flex flex-col gap-2">
        <textarea
          className="px-3 py-2 rounded resize-none border-2 border-stroke-light text-primary-light bg-transparent outline-none focus:border-brand-500 scrollbar-thumb-stroke-light scrollbar-track-transparent scrollbar-thin dark:text-primary-dark dark:border-stroke-dark dark:scrollbar-thumb-stroke-dark"
          placeholder="Is somethings not working right? We want to correct. Tell us in detail what happening"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          cols={25}
          rows={4}
        />

        <div className="flex gap-2">
          {
            currentStep === 'BUG' &&
            <ScreenshotButton
              isEnable={feedback.trim().length === 0 || isSubmittingFeedback}
              onTakeScreenshot={setScreenshot}
              screenshot={screenshot}
            />
          }
          <button
            className="w-full flex justify-center py-2 rounded text-sm leading-6 text-white font-medium bg-brand-500 transition-colors outline-none disabled:opacity-40 hover:bg-brand-300 disabled:hover:bg-brand-500 ring-brand-500 ring-offset-surface-primary-light ring-offset-2 focus:ring-2 dark:ring-offset-surface-primary-dark"
            disabled={feedback.trim().length === 0}
            type="submit">
            {isSubmittingFeedback ? <Loading /> : 'Send feedback'}
          </button>
        </div>
      </form>
    </>
  );
}
