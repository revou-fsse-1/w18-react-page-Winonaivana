import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  onClose: () => void;
};

const LearnMore = ({ onClose }: Props) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed z-50 h-[500px] w-[400px]  items-center justify-center bg-black bg-opacity-80 md:mt-20 md:w-[500px]">
      <div className="flex-col justify-end p-12">
        <button onClick={handleClose}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
        <p className="text-sm text-white  md:text-base">
          Introducing Serenity Interiors: Where Simplicity Reigns. Emily, a
          passionate interior designer with a vision for creating harmonious
          spaces through minimalism. With a firm belief in the power of
          simplicity, she founded Serenity Interiors. Driven by a desire to
          transform spaces, Emily and her team carefully curate minimalist
          designs that radiate elegance and tranquility. Word spread quickly
          about their exceptional work, and Serenity Interiors became synonymous
          with minimalist design. Today, they stand as a beacon in the industry,
          inspiring others to embrace the beauty of minimalism. Discover the
          magic of simplicity and embark on a journey towards serenity. Welcome
          to Serenity Interiors, where less is more, and beauty thrives.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
