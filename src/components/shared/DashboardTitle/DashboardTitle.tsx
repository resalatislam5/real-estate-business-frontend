import { ReactNode } from "react";

const DashboardTitle = ({
  name,
  count,
}: {
  name: string;
  count: string | number | ReactNode;
}) => {
  return (
    <div className="flex gap-2 items-center text-2xl font-semibold">
      <h2 className="">{name}</h2>
      <span className="text-gray-500">{count}</span>
    </div>
  );
};

export default DashboardTitle;
