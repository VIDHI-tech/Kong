import { cn } from "../lib/utils";

interface TimelineCardProps {
  title: string;
  items: string[];
  isInverted?: boolean;
}

const TimelineCard = ({ title, items, isInverted }: TimelineCardProps) => {
  return (
    <div
      className={cn(
        `bg-white lg:min-w-96 w-full p-8 rounded-lg shadow-xl relative transform before:content-[''] before:absolute before:inset-0 before:bg-white before:-z-10 before:rounded-2xl before:transform before:origin-top-right before:-skew-y-6 before:-translate-y-[5rem] border-black border-r-4 border-b-4 my-20 sm:my-10 lg:my-auto`,
        {
          "before:origin-top-left before:skew-y-6": isInverted,
        }
      )}
    >
      <div
        className={cn(
          `absolute -top-1/4 w-16 lg:w-24 xl:w-28 hidden lg:block`,
          {
            "right-0 lg:-top-[9rem] xl:-top-[9rem]": isInverted,
            "left-0  lg:-top-[9rem] xl:-top-[11rem]": !isInverted,
          }
        )}
      >
        <img
          src="/fire.png"
          alt="Fire Icon"
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl lg:text-2xl xl:text-3xl passion-one-bold text-r mb-4">
        {title}
      </h3>
      <div className="space-y-2">
        {items.map((listItem, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-2 h-2 lg:w-4 lg:h-4 bg-white border-2 border-r rounded-full flex items-center justify-center" />
            <span className="text-sm md:text-base lg:text-xl xl:text-2xl pangolin-regular">
              {listItem}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
