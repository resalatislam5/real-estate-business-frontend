const LoadingSuspense = ({ style }: { style?: string }) => {
  return (
    <div
      className={`${style} w-full h-4 rounded bg-gray-200 animate-pulse mb-3`}
    />
  );
};

export default LoadingSuspense;
