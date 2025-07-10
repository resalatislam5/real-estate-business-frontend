import { ReactNode } from "react";

const PropertiesDetailsSection = ({
  title,
  rightText,
  children,
}: {
  title: string;
  rightText?: string;
  children: ReactNode;
}) => {
  return (
    <div className="p-5 bg-white rounded-lg w-full my-10">
      <div className="flex justify-between gap-5">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-gray-500">{rightText}</p>
      </div>
      <div className="w-full h-[1px] bg-gray-400 my-5" />
      {children}
    </div>
  );
};

export default PropertiesDetailsSection;
