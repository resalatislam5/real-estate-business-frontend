import Link from "next/link";

interface Items {
  id: string;
  name: string;
  to: string;
}

const Breadcrumb = ({ style, items }: { style?: string; items: Items[] }) => {
  return (
    <section
      className={`${style} inner-main-width !mb-10 sm:pt-10 pt-5 md:flex hidden`}
    >
      <div className="flex items-center flex-wrap">
        {items.map((e, index) => {
          return (
            <Link
              className="group text-base text-gray-500"
              href={e.to}
              key={index}
            >
              <span className="group-first:text-lg group-first:text-secondary group-first:hover:text-primary group-last:hover:text-gray-500 hover:text-primary">
                {e.name}
              </span>
              <span className="mx-2 group-last:hidden">/</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Breadcrumb;
