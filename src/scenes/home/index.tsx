import useMediaQuery from "@/hooks/useMediaQuery";

import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import home from "@/assets/home.jpg";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/*HEADER IMAGE */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/*main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/*header */}
          <div>
            <div>
              <p>interior designer</p>
            </div>
            <p className="mt-8 text-sm md:text-start">
              blending creativity and functionality in every design{" "}
            </p>
          </div>
          <div className="mb-8 mt-8 flex items-center  md:justify-start">
            <AnchorLink
              className=" text-sm font-bold text-primary-100  hover:underline"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>learn more</p>
            </AnchorLink>
          </div>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-20 md:justify-items-end">
          <img alt="home-graphics" src={home} />
        </div>
      </div>
    </section>
  );
};

export default Home;
