const Missed = () => {
  const presaleConfig = [
    { src: "/about1.svg", name: "BORK?" },
    { src: "/about2.svg", name: "HONK?" },
    { src: "/about3.svg", name: "BONG?" },
    { src: "/about4.svg", name: "BONK?" },
  ];
  return (
    <div
      id="presale"
      className="flex flex-col items-center justify-between px-6 pb-32 pt-48 gap-y-4 bg-b text-white xl:px-[calc(50%-600px)]"
    >
      <h1 className="text-2xl md:text-5xl font-extrabold uppercase tracking-tight">Did you Missed</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 items-center">
        {presaleConfig.map((config, index) => (
          <a
            key={index}
            href="/"
            className="flex items-center justify-center cursor-pointer"
          >
            <img src={config.src} className="h-20 md:w-1/2 xl:w-2/5 p-5" />
            <p className="text-4xl md:text-6xl passion-one-regular text-y hover:text-r">
              {config.name}
            </p>
          </a>
        ))}
      </div>

      <div className="bg-y relative w-full rounded-3xl my-24">
        <span className="flex justify-around w-full md:h-24 -top-14 md:-top-14 pb-0 absolute">
          <img src="/6grass.png" alt="" className="hidden lg:block" />
          <figure className="w-32 h-32 bg-b rounded-full items-center justify-center flex"> 
            <img src="/downarrow.svg" alt="" />
          </figure>
          <img src="/6grass.png" alt="" className="hidden lg:block"/>
        </span>
        <section className="w-full flex flex-col items-center py-32">
          <h1 className="text-2xl lg:text-3xl xl:text-6xl passion-one-regular text-center text-black track">
          Do not miss the <span className="text-b">Kong Presale</span> 
          </h1>
          <h1 className="text-2xl lg:text-3xl xl:text-6xl passion-one-regular text-center text-black">Coming on <span className="text-b">Sunday 3.00 PM UTC</span> </h1>
          <button className="bg-r pangolin-bold p-7 2xl:p-10 rounded-3xl text-2xl xl:text-4xl mt-16 xl:mt-28 xl:mb-10">Offers an EXPIRED</button>
        </section>
      </div>
    </div>
  );
};

export default Missed;
