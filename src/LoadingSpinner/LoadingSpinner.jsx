const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-green-400 rounded-full animate-spin border-t-transparent"></div>

        <div className="absolute inset-4 border-4 border-green-600 rounded-full animate-spin-reverse border-b-transparent"></div>

        <div className="absolute inset-8 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
