import { useState } from 'react';
import { ChevronUpDownIcon } from './Icons';

type Option = {
  label: string;
  value: string;
  // [key: string]: unknown;
};

type SelectProps<TOption> = {
  options: TOption[];
  selected: string;
  onSelect: (value: string) => void;
  renderOption?: (option: TOption) => React.ReactNode;
};

export default function Select<TOption extends Option>({
  renderOption,
  selected,
  options,
  onSelect,
}: SelectProps<TOption>) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === selected);

  return (
    <div className="relative w-72 max-w-72">
      <button
        onClick={() => setIsOpen(o => !o)}
        className="relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <span className="block truncate">
          {selectedOption?.label ?? 'Select an option'}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </button>

      {isOpen && (
        <ul className="absolute text-left z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm space-y-1">
          {options.map(option => (
            <li
              key={option.value}
              className={`relative flex items-center gap-2 select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white truncate cursor-pointer ${
                option.value === selected
                  ? 'bg-indigo-600 font-medium text-white'
                  : ''
              }`}
              onClick={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              {renderOption ? (
                renderOption(option)
              ) : (
                <>
                  <span>{option.label}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
