const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-32">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
    </div>
  );
};

export default LoadingSpinner;
