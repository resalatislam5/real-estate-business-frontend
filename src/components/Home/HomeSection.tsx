import { ReactNode } from "react";

const HomeSection = ({
  title,
  innerTitle,
  children,
}: {
  title: string;
  innerTitle: string;
  children: ReactNode;
}) => {
  return (
    <section className="inner-main-width">
      <div className="text-center">
        <h1 className="md:text-5xl text-3xl font-semibold sm:mb-8 mb-2 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="max-w-4xl mx-auto sm:text-lg text-sm">{innerTitle}</p>
      </div>
      {/*  */}
      {children}
    </section>
  );
};

export default HomeSection;
