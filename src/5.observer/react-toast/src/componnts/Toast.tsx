export type ToastProps = {
  message: string;
  id: number;
  variant?: 'default' | 'success' | 'error';
  onClose(): void;
};

const variantsBackground: Record<NonNullable<ToastProps['variant']>, string> = {
  default: 'bg-gray-900',
  success: 'bg-teal-600',
  error: 'bg-red-500',
};

export function Toast({ message, variant = 'default', onClose }: ToastProps) {
  return (
    <div
      className={`text-sm text-white rounded-xl shadow-lg ${variantsBackground[variant]} pointer-events-auto`}
      role="alert"
    >
      <div className="flex p-4">
        {message}
        <div className="ms-auto">
          <button
            onClick={onClose}
            type="button"
            className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
