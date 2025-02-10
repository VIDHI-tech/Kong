// import { useEffect, useState } from "react";

// const timelineData = [
//   {
//     id: 1,
//     title: "Tuesday, January 30",
//     items: [
//       "Social media accounts creation.",
//       // "Start of marketing, community building.",
//       "Partnerships with influencers.",
//       "Making some noise.",
//     ],
//   },
//   {
//     id: 2,
//     title: "FEBRUARY 1",
//     items: [
//       "Whitepaper live for public.",
//       "Partnership with Moontok.",
//       "Start of press release.",
//       "Start of press release.",
//     ],
//   },
//   {
//     id: 3,
//     title: "FEBRUARY 2",
//     items: [
//       "Official website goes live.",
//       "Partnership with YouTubers.",
//       "The start of major marketing campaigns.",
//     ],
//   },
//   {
//     id: 4,
//     title: "FEBRUARY 4",
//     items: [
//       "The start of Pre-sale.",
//       "Partnership with YouTubers.",
//       "The start of major marketing campaigns.",
//     ],
//   },
//   {
//     id: 5,
//     title: "FEBRUARY 5",
//     items: [
//       "Token distribution.",
//       "Big marketing campaigns before the launch.",
//       "Kong trending on Twitter.",
//     ],
//   },
//   {
//     id: 6,
//     title: "FEBRUARY 7",
//     items: [
//       "Kong launch, start of the trading.",
//       "Dextools trending.",
//       "CMC and CG application.",
//     ],
//   },
//   {
//     id: 7,
//     title: "FEBRUARY 10",
//     items: [
//       "Official website goes live.",
//       "Partnership with YouTubers.",
//       "The start of major marketing campaigns.",
//     ],
//   },
//   {
//     id: 8,
//     title: "FEBRUARY 15",
//     items: [
//       "CEX listings start.",
//       "Partnership with YouTubers.",
//       "The start of major marketing campaigns.",
//     ],
//   },
//   {
//     id: 9,
//     title: "Q2 2024",
//     items: [
//       "Worldwide big marketing campaigns.",
//       "Launch of Kong SOL DEX.",
//       "The start of major marketing campaigns.",
//     ],
//   },
//   {
//     id: 10,
//     title: "Q4 2024",
//     items: [
//       "Big buyback and burn events.",
//       "Reaching 50,000 holders.",
//       "Building the biggest memecoin community.",
//     ],
//   },
//   {
//     id: 11,
//     title: "2025",
//     items: [
//       "New roadmap release",
//       "Partnership with YouTubers.",
//       "The start of major marketing campaigns.",
//     ],
//   },
// ];

// const Roadmap = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const position = window.scrollY;
//       const maxScroll =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollPercentage = (position / maxScroll) * 100;
//       setScrollPosition(scrollPercentage);
//       console.log(scrollPosition);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     // <div className="min-h-screen bg-b py-12 px-4 sm:px-6 lg:px-8">
//     <div className="max-w-7xl mx-auto min-h-screen bg-b py-12 px-2 sm:px-6 2xl:px-0">
//       <h1 className=" text-center pb-48 text-5xl font-extrabold text-white uppercase tracking-tighter">
//         Roadmap
//       </h1>
//       <div className="relative">
//         {/* Center line */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white hidden md:block">
//           <div className="relative w-full h-full">
//             {/* Scrolling indicator */}
//             <div
//               className="sticky z-10 left-0 top-96 w-32"
//               style={{
//                 left: "50%",
//                 transform: `translate(-50%)`,
//                 transition: "transform 0.1s ease-out",
//               }}
//             >
//               <img
//                 src="/mask.png"
//                 alt="Scroll Indicator"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Timeline cards */}
//         <div className="relative">
//           {timelineData.map((item, index) => (
//             <div
//               key={item.id}
//               className="mb-8 flex flex-col sm:flex-row items-center"
//             >
//               {/* Left side */}
//               <div className="w-full md:w-2/5">
//                 {index % 2 === 0 && (
//                   // <div className="bg-white p-6 rounded-lg shadow-xl relative border border-black border-e-4 border-b-4 border-l-0 border-t-0 ">
//                   <div
//                     className="bg-white p-8 rounded-lg shadow-xl relative
//                           transform  transition-transform duration-300
//                           before:content-[''] before:absolute before:inset-0
//                           before:bg-white before:-z-10 before:rounded-lg
//                           before:transform before:origin-top-right before:skew-y-6 before:translate-y-[-2rem]
//                           border-black border-r-4 border-b-4 my-20 sm:my-10 md:my-auto"
//                   >
//                     <div className="absolute -top-1/4 lg:-top-3/4 w-16 lg:w-28 hidden md:block">
//                       <img
//                         src="/fire.png"
//                         alt=""
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <h3 className="text-xl md:text-3xl passion-one-bold text-r mb-4">
//                       {item.title}
//                     </h3>
//                     <div className="space-y-2">
//                       {item.items?.map((listItem, i) => (
//                         <div key={i} className="flex items-center space-x-3">
//                           <div className="w-2 h-2 md:w-4 md:h-4 bg-white border-2 border-r rounded-full flex items-center justify-center" />
//                           <span className="text-base md:text-2xl pangolin-regular">
//                             {listItem}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Connecting line */}
//               <div
//                 className={`w-1/5 relative hidden md:block ${
//                   index % 2 === 0 ? "-left-48" : "-right-48"
//                 } w-full h-[1px] bg-white`}
//               ></div>

//               {/* Right side */}
//               <div className="w-full md:w-2/5">
//                 {index % 2 === 1 && (
//                   <div
//                     className="bg-white p-8 rounded-lg shadow-xl relative
//                           transform before:content-[''] before:absolute before:inset-0
//                           before:bg-white before:-z-10 before:rounded-lg
//                           before:transform before:origin-top-right before:skew-y-6 before:translate-y-[-2rem]
//                           border-black border-r-4 border-b-4"
//                   >
//                     {/* <div className="absolute -top-3/4 w-28 flex justify-end">
//                         <img
//                           src="/fire.png"
//                           alt=""
//                           className="w-full h-full object-contain"
//                         />
//                       </div> */}
//                     <div className="absolute -top-1/4 md:-top-20 lg:-top-3/4 w-16 lg:w-28 hidden md:block">
//                       <img
//                         src="/fire.png"
//                         alt=""
//                         className="w-full h-full object-contain"
//                       />
//                     </div>
//                     <h3 className="text-xl md:text-3xl passion-one-bold text-r mb-4">
//                       {item.title}
//                     </h3>
//                     <div className="space-y-2">
//                       {item.items?.map((listItem, i) => (
//                         <div key={i} className="flex items-center space-x-3">
//                           <div className="w-2 h-2 md:w-4 md:h-4 bg-white border-2 border-r rounded-full flex items-center justify-center" />
//                           <span className="text-base md:text-2xl pangolin-regular">
//                             {listItem}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default Roadmap;

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

      {/* <div className="relative"> */}
      {/* Timeline Cards */}
      {/* <div className="relative">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className="mb-8 flex flex-col sm:flex-row items-center"
          >
            <div className="w-full">
              {index % 2 === 0 && (
                <TimelineCard
                  title={item.title}
                  items={item.items}
                  isInverted={!isBigScreen}
                />
              )}
            </div>

          
            <div
              className={`w-1/5 relative hidden md:block ${
                index % 2 === 0 ? "-left-48" : "-right-48"
              } w-full h-[1px] bg-white`}
            ></div>

            <div className="w-full">
              {index % 2 === 1 && (
                <TimelineCard
                  title={item.title}
                  items={item.items}
                  isInverted={true}
                />
              )}
            </div>
          </div>
        ))}
      </div> */}
      {/* </div> */}
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
