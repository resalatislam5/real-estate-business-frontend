import PropertiesDetailsSection from "./PropertiesDetailsSection";

const PropertiesDetailsDescription = ({ text }: { text: string }) => {
  return (
    <PropertiesDetailsSection title="Description">
      <div className="flex flex-col gap-3 font-light">
        <p>{text}</p>
      </div>
    </PropertiesDetailsSection>
  );
};

export default PropertiesDetailsDescription;
