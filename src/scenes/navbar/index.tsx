import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-20";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <p>black.</p>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <p>home</p>
                  <p>gallery</p>
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>sign in</p>
                  <button>contact us</button>
                </div>
              </div>
            ) : (
              <button>
                <button className="rounded-full  p-2">
                  <Bars3Icon className="h-6 w-6 text-black" />
                </button>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
