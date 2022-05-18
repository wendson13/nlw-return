import { useState } from 'react';
import { Steps } from './Steps';
import { SelectSteps } from './Steps/SelectSteps';
import { SuccessStep } from './Steps/SuccessStep';

export const ContentOptions = {
  BUG: {
    title: 'Problem',
    image: {
      source: './bug.svg',
      alt: 'purple insect'
    }
  },

  IDEA: {
    title: 'Idea',
    image: {
      source: './idea.svg',
      alt: 'light on'
    }
  },

  THOUGHT: {
    title: 'Other',
    image: {
      source: './thought.svg',
      alt: 'thought cloud'
    }
  }
};

export type ContentOptionsType = typeof ContentOptions;
export type ContentOptionsKeyType = keyof typeof ContentOptions;

export function WidgetContent() {
  const [currentStep, setCurrentStep] = useState<ContentOptionsKeyType | null>(null);
  const [isSendFeedback, setIsSendFeedback] = useState(false);

  const handleBackSelectSteps = () => {
    setCurrentStep(null);
  };

  const handleResetFeedbackStep = () => {
    setCurrentStep(null);
    setIsSendFeedback(false);
  };

  return (
    <div className="relative flex flex-col gap-8 items-center p-4 rounded-2xl bg-surface-primary-light shadow-lg w-[calc(100vw-2rem)] mb-4 sm:w-auto dark:bg-surface-primary-dark">
      <>
        {
          !currentStep

            ? (
              <SelectSteps
                contentOptions={ContentOptions}
                onChangeCurrentOption={setCurrentStep}
              />)

            : isSendFeedback
              ? <SuccessStep onSendNewFeedback={handleResetFeedbackStep} />

              : <Steps
                currentStep={currentStep}
                onToBack={handleBackSelectSteps}
                onSendFeedback={setIsSendFeedback}
              />
        }
      </>

      <footer>
        <span className="flex gap-1 text-secondary-light dark:text-secondary-dark">
          made with 🖤 by
          <a
            className="underline underline-offset-2 rounded outline-none border-2 border-transparent focus:border-brand-500"
            href="https://github.com/wendson13/"
            target="_black"
            rel="noopener"
          >
            Wendson Sousa
          </a>
        </span>
      </footer>
    </div>
  );
}
