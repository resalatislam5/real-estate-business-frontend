import PropertiesDetailsSection from "./PropertiesDetailsSection";

interface ItemsType {
  id: string;
  title: string;
  value: string | number;
}

const PropertiesDetailsInner = ({
  items,
  title,
  rightText,
}: {
  items: ItemsType[];
  title: string;
  rightText?: string;
}) => {
  return (
    <PropertiesDetailsSection title={title} rightText={rightText}>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {items.map((item) => (
          <div key={item.id}>
            <div className="flex justify-between gap-2 font-normal text-gray-500">
              <p className="font-semibold text-secondary items-flex-2">
                {item.title}
              </p>
              {item.value}
            </div>
            <hr className="mt-3" />
          </div>
        ))}
      </div>
    </PropertiesDetailsSection>
  );
};

export default PropertiesDetailsInner;
