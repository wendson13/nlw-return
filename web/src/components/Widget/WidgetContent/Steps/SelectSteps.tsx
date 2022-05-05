import { ContentOptionsKeyType, ContentOptionsType } from '..';
import { CloseButton } from '../../CloseButton';

type SelectStepProps = {
  contentOptions: ContentOptionsType;
  onChangeCurrentOption: (option: ContentOptionsKeyType) => void;
}

export function SelectSteps ({ contentOptions, onChangeCurrentOption }: SelectStepProps) {
  return (
    <>
      <header className="flex items-center text-xl leading-6 text-zinc-100 font-medium">
        <span>let your feedback</span>
        <CloseButton />
      </header>

      <div className="flex w-full justify-between gap-4">
        {
          Object.entries(contentOptions).map(([key, option]) => (
            <button
              className="w-full h-28 flex flex-col justify-center items-center gap-2 rounded-lg text-sm font-medium text-zinc-100 bg-zinc-800 border-2 outline-none border-transparent hover:border-brand-500 focus:border-brand-500 sm:w-24"
              onClick={() => onChangeCurrentOption(key as ContentOptionsKeyType)}
              key={key}
            >
              <img src={option.image.source} alt={option.image.alt} />
              <span>{option.title}</span>
            </button>
          ))
        }
      </div>
    </>
  );
}
