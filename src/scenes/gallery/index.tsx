import { SelectedPage, GalleryType } from "@/shared/types";
import { motion } from "framer-motion";
import pictures from "@/pictures.json";

import { useState } from "react";
import GalleryProperties from "./Gallery";
import SearchBar from "@/components/Search";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Gallery = ({ setSelectedPage }: Props) => {
  const images: GalleryType[] = pictures;
  const [saveCount, setSaveCount] = useState(0);
  const SaveChange = (saved: boolean) => {
    setSaveCount((count) => (saved ? count + 1 : count - 1));
  };

  const [searchResult, setSearchResult] = useState<GalleryType[]>(images);
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (input: string) => {
    const results = images.filter((result) =>
      result.name.toLowerCase().includes(input.toLowerCase())
    );
    searchInput;
    setSearchResult(results);
    setSearchInput(input);
  };

  return (
    <section id="gallery" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Gallery)}>
        {/*header*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="basis-3/5 text-xl">gallery.</h1>
          <p className="mt-8">saved {saveCount}</p>
          <SearchBar onSearch={handleSearch}></SearchBar>
        </motion.div>
        {/*images*/}

        <div className="mt-8 items-center justify-between gap-8 md:grid md:grid-cols-3">
          {searchResult.map((image: GalleryType) => (
            <GalleryProperties
              key={image.id}
              id={image.id}
              name={image.name}
              isSave={image.isSave}
              imgSrc={image.imgSrc}
              onSaveChange={SaveChange}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gallery;
