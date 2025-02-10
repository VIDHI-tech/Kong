
interface TimelineCardProps {
  title: string;
  items: string[];
  isInverted?: boolean;
}

const TimelineCard = ({ title, items, isInverted }:TimelineCardProps) => {
  return (
    <div
      className={`bg-white min-w-96 w-full p-8 rounded-lg shadow-xl relative 
                  transform before:content-[''] before:absolute before:inset-0
                  before:bg-white before:-z-10 before:rounded-lg
                  before:transform before:origin-top-right
               before:-skew-y-6 before:-translate-y-[3rem]
                  border-black border-r-4 border-b-4 my-20 sm:my-10 md:my-auto`}
    >
      <div className={`absolute -top-1/4 lg:-top-3/4 w-16 lg:w-28 hidden md:block right-0`}>
        <img src="/fire.png" alt="Fire Icon" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl md:text-3xl passion-one-bold text-r mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((listItem, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-2 h-2 md:w-4 md:h-4 bg-white border-2 border-r rounded-full flex items-center justify-center" />
            <span className="text-base md:text-2xl pangolin-regular">{listItem}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
