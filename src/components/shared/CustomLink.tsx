import Link from "next/link";
import { ReactNode } from "react";

interface customLinkProps {
  children: ReactNode;
  style?: string;
  to?: string;
  props?: () => void;
}
const CustomLink = ({
  children,
  style,
  to = "#",
  ...props
}: customLinkProps) => {
  return (
    <Link
      {...props}
      className={`${style} px-6 py-2 border border-primary text-primary font-semibold text-lg rounded-lg flex justify-center items-center gap-2 hover:bg-primary hover:text-white duration-500`}
      href={to}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
