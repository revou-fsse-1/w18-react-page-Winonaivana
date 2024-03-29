import { SelectedPage } from "@/shared/types";
import home from "@/assets/home.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
import LearnMore from "@/components/LearnMore";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const handleLearnMore = () => {
    setIsShown(true);
  };

  const handleClose = () => {
    setIsShown(false);
  };
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/*HEADER IMAGE */}

      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {isShown && <LearnMore onClose={handleClose}></LearnMore>}
        {/*main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*header */}
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
            <div>
              <p className="text-xl">interior designer.</p>
            </div>
            <p className="mt-8 text-sm md:text-start">
              blending minimalism and functionality in every design{" "}
            </p>
          </motion.div>
          <motion.div
            className="mb-8 mt-8 flex items-center  md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className=" bold">
              <button onClick={handleLearnMore} className="hover:underline ">
                learn more
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-20 md:justify-items-end"
        >
          <img alt="home-graphics" src={home} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
