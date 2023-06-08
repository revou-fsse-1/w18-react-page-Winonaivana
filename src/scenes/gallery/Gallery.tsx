import { useState } from "react";
import SaveButton from "@/components/SaveButton";
import { SelectedPage } from "@/shared/types";

type Props = {
  id: number;
  name: string;
  imgSrc: string;
  isSave: boolean;
  onSaveChange: (saved: boolean) => void;
};

const GalleryProperties = (image: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
  w-[100%] h-[100%] flex-col items-center justify-center
  whitespace-normal bg-primary-100 text-center text-white
  opacity-0 transition duration-500 hover:opacity-90`;
  const [isSave, setIsSave] = useState(image.isSave);

  const handleSaveChange = (saved: boolean) => {
    setIsSave(saved);
    image.onSaveChange(saved);
  };
  return (
    <div className="relative ">
      <div className={overlayStyles}>
        <p>{image.name}</p>
        <SaveButton initial={isSave} onSaveChange={handleSaveChange} />
      </div>
      <img
        className="h-[500px] w-[400px] sm:mt-8 md:mt-0 "
        src={image.imgSrc}
      />
    </div>
  );
};

export default GalleryProperties;
