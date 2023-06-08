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
  const [isSave, setIsSave] = useState(image.isSave);

  const handleSaveChange = (saved: boolean) => {
    setIsSave(saved);
    image.onSaveChange(saved);
  };
  return (
    <>
      <div className="h-[600px]">
        <img className="h-[500px] w-[400px]" src={image.imgSrc} />
        <p>{image.name}</p>
        <SaveButton initial={isSave} onSaveChange={handleSaveChange} />
      </div>
    </>
  );
};

export default GalleryProperties;
