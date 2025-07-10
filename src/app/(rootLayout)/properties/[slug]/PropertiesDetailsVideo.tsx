import PropertiesDetailsSection from "./PropertiesDetailsSection";

const PropertiesDetailsVideo = ({ video }: { video: string }) => {
  return (
    <PropertiesDetailsSection title="Video">
      <iframe
        className="w-full sm:h-[450px] h-80"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </PropertiesDetailsSection>
  );
};

export default PropertiesDetailsVideo;
