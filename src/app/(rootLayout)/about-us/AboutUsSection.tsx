import { ReactNode } from "react";
const AboutUsSection = ({
  title,
  style,
  children,
}: {
  title: string;
  style?: string;
  children: ReactNode;
}) => {
  return (
    <section className={`${style} main-width`}>
      <h1 className="sm:text-4xl text-2xl font-semibold sm:pb-10 pb-5">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default AboutUsSection;
