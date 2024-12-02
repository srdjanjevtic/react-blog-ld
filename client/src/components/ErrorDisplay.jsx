const ErrorDisplay = ({ error, retry }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <div className="text-red-500 text-lg mb-2">
        {error?.message || 'Something went wrong'}
      </div>
      {retry && (
        <button
          onClick={retry}
          className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
