import { SelectedPage, GalleryType } from "@/shared/types";
import { motion } from "framer-motion";
import pictures from "@/pictures.json";
import GalleryProperties from "./gallery";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
  const images: GalleryType[] = pictures;
  const [saveCount, setSaveCount] = useState(0);
  const handleSaveChange = (saved: boolean) => {
    setSaveCount((count) => (saved ? count + 1 : count - 1));
  };
  return (
    <section id="gallery" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
        {/*header*/}
        <div>
          <h1 className="basis-3/5 text-xl">gallery.</h1>
        </div>
        {/*images*/}
        <div className="mt-8  items-center justify-between gap-8 md:grid md:grid-cols-3">
          {images.map((image: GalleryType) => (
            <GalleryProperties
              key={image.id}
              id={image.id}
              name={image.name}
              isSave={image.isSave}
              imgSrc={image.imgSrc}
              onSaveChange={handleSaveChange}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
