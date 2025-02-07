const Presale = () => {
    const images = [
        { src: '/about1.svg', delay: '0s' },
        { src: '/about2.svg', delay: '0.2s' },
        { src: '/about3.svg', delay: '0.4s' },
        { src: '/about4.svg', delay: '0.6s' }
      ];
  return (
    <>
    <div className="bg-y relative">
      <span className="flex justify-between w-full md:h-52 overflow-hidden -top-14 md:-top-32 pb-0 absolute">
        <img src="/6grass.png" alt="" className="hidden lg:block" />
        <img src="/6grass.png" alt=""/>
      </span>
      <section className="px-6 py-14 xl:py-36 xl:px-[calc(50%-600px)]">
        <h1 className="text-2xl lg:text-3xl xl:text-6xl passion-one-bold text-center">KONG PRE-SALE EVERYONE IS<br/> EARLY HERE!</h1>
        <div className="flex justify-center gap-7 items-center pt-20">
        {images.map((image, index) => (
          <a key={index} href="/">
            <img
              src={image.src} 
              className="animate-bounce"
              style={{ animationDelay: image.delay }}
            />
          </a>
        ))}
      </div>
      <div className="w-full h-10 md:h-16 xl:h-24 bg-white/50 rounded-[49%]">
      <div className="w-full h-10 md:h-20 xl:h-24 bg-white/25 rounded-[49%] pt-14 md:pt-20 xl:pt-32"></div>

      </div>
      </section>
      <span className="flex justify-between w-full md:h-52 overflow-hidden -bottom-14 md:-bottom-32 pt-0 absolute rotate-180">
        <img src="/6grass.png" alt="" className="hidden lg:block" />
        <img src="/6grass.png" alt="" />
      </span>
    </div>
    </>
  );
};

export default Presale;

 

// const About = () => {
//     const images = [
//         { src: '/about1.svg', delay: '0s' },
//         { src: '/about2.svg', delay: '0.2s' },
//         { src: '/about3.svg', delay: '0.4s' },
//         { src: '/about4.svg', delay: '0.6s' }
//     ];
//   return (
//     <>
//     <div className="bg-y relative">
//       {/* Top outverted curve */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden h-16">
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="absolute bottom-0 left-0 w-full h-full"
//           fill="#FFE55C"
//         >
//           <path d="M 0 0 L 0 60 Q 600 120 1200 60 L 1200 0 Z" />
//         </svg>
//       </div>

//       <span className="flex justify-between w-full h-52 overflow-hidden -top-32 pb-0 absolute">
//         <img src="/6grass.png" alt="" className="hidden lg:block" />
//         <img src="/6grass.png" alt="" />
//       </span>
//       <section className="px-6 py-14 xl:py-20 xl:px-[calc(50%-600px)] relative">
//         <h1 className="text-2xl lg:text-3xl xl:text-6xl passion-one-bold text-center">KONG PRE-SALE EVERYONE IS<br/> EARLY HERE!</h1>
//         <div className="flex justify-center gap-7 items-center pt-20">
//         {images.map((image, index) => (
//           <a key={index} href="/">
//             <img
//               src={image.src} 
//               className="animate-bounce"
//               style={{ animationDelay: image.delay }}
//               alt=""
//             />
//           </a>
//         ))}
//       </div>
//       </section>
//       <span className="flex justify-between w-full h-52 overflow-hidden -bottom-32 pt-0 absolute rotate-180">
//         <img src="/6grass.png" alt="" className="hidden lg:block" />
//         <img src="/6grass.png" alt="" />
//       </span>

//       {/* Bottom inverted curve */}
//       <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16">
//         <svg
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//           className="absolute top-0 left-0 w-full h-full"
//           fill="#FFE55C"
//         >
//           <path d="M 0 120 L 0 60 Q 600 0 1200 60 L 1200 120 Z" />
//         </svg>
//       </div>
//     </div>
//     </>
//   );
// };

// export default About;