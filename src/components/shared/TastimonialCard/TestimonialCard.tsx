import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col gap-3 border rounded-lg shadow-sm p-5">
      <p className="text-sm font-light">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        culpa quas facere ducimus fuga, maiores modi! Corrupti laboriosam
        tempora deserunt doloremque illo. Repellat pariatur fugit cum. Ipsa
        maxime cum quas!&ldquo
      </p>
      <div className="flex gap-3 items-center mt-5">
        <div className="">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={"/avater.png"}
            alt=""
          />
        </div>
        <div className="flex flex-col font-light">
          <h2 className="text-lg">Bonnie Green</h2>
          <p className="text-xs">CTO at Open AI</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
