
import TimelineCard from "./TimelineCard";
import { useMediaQuery } from "react-responsive";

const timelineData = [
  {
    id: 1,
    title: "Tuesday, January 30",
    items: [
      "Social media accounts creation.",
      "Partnerships with influencers.",
      "Making some noise.",
    ],
  },
  {
    id: 2,
    title: "FEBRUARY 1",
    items: [
      "Whitepaper live for public.",
      "Partnership with Moontok.",
      "Start of press release.",
    ],
  },
  {
    id: 3,
    title: "FEBRUARY 2",
    items: [
      "Official website goes live.",
      "Partnership with YouTubers.",
      "The start of major marketing campaigns.",
    ],
  },
  {
    id: 4,
    title: "FEBRUARY 4",
    items: [
      "The start of Pre-sale.",
      "Partnership with YouTubers.",
      "The start of major marketing campaigns.",
    ],
  },
  {
    id: 5,
    title: "FEBRUARY 5",
    items: [
      "Token distribution.",
      "Big marketing campaigns before the launch.",
      "Kong trending on Twitter.",
    ],
  },
];

const Roadmap = () => {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div className="max-w-7xl mx-auto min-h-screen bg-b py-12 px-2 sm:px-6 2xl:px-0">
      <h1 className="text-center pb-48 text-5xl font-extrabold text-white uppercase tracking-tighter">
        Roadmap
      </h1>

      {/* mobile */}
      <div className="flex justify-center px-8 lg:hidden">
        <div className="flex justify-between gap-10 h-fit max-w-[35rem]">
          <div className="relative w-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white block">
              <div className="relative w-full h-full">
                {/* Scrolling indicator */}
                <div
                  className="sticky z-10 left-0 top-96 w-32"
                  style={{
                    left: "50%",
                    transform: `translate(-50%)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <img
                    src="/mask.png"
                    alt="Scroll Indicator"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col gap-5">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className="mb-8 flex flex-col sm:flex-row items-center"
              >
                {index % 2 === 0 && (
                  <TimelineCard
                    title={item.title}
                    items={item.items}
                    isInverted={false}
                  />
                )}

                {index % 2 === 1 && (
                  <TimelineCard
                    title={item.title}
                    items={item.items}
                    isInverted={false}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="lg:grid grid-cols-2 gap-x-32 2xl:gap-x-48 relative hidden">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white block">
          <div className="relative w-full h-full">
            {/* Scrolling indicator */}
            <div
              className="sticky z-10 left-0 top-96 w-32"
              style={{
                left: "50%",
                transform: `translate(-50%)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              <img
                src="/mask.png"
                alt="Scroll Indicator"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        {timelineData.map((item, index) => {
          // Calculate row and column position
          const rowStart = index + 1; // Each item gets its own row
          const isEvenIndex = index % 2 === 0;
          return (
            <div
              key={item.id}
              className={`
                  ${isEvenIndex ? "col-start-1" : "col-start-2"}
                `}
              style={{
                gridRow: rowStart,
              }}
            >
              {index % 2 === 0 ? (
                <TimelineCard
                  title={item.title}
                  items={item.items}
                  isInverted={false}
                />
              ) : (
                <TimelineCard
                  title={item.title}
                  items={item.items}
                  isInverted={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
