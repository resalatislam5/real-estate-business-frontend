const DashboardTitle = ({
  name,
  count,
}: {
  name: string;
  count: string | number;
}) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">
        {name} <span className="text-gray-500">{count}</span>
      </h2>
    </div>
  );
};

export default DashboardTitle;
