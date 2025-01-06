const About = () => {
    const images = [
        { src: '/about1.svg', delay: '0s' },
        { src: '/about2.svg', delay: '0.2s' },
        { src: '/about3.svg', delay: '0.4s' },
        { src: '/about4.svg', delay: '0.6s' }
      ];
  return (
    <>
      <div className="bg-y relative">
      <span className="flex justify-between w-full h-52 overflow-hidden -top-32 pb-0 absolute">
        <img src="/6grass.png" alt="" className="hidden lg:block" />
        <img src="/6grass.png" alt="" />
      </span>
      <section className="px-6 py-14 xl:py-20 xl:px-[calc(50%-600px)]">
        <h1 className="text-2xl lg:text-3xl xl:text-6xl passion-one-bold text-center">KONG PRE-SALE EVERYONE IS<br   /> EARLY HERE!</h1>
        <div className="images flex justify-center items-center">
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
      </section>
      </div>
    </>
  );
};

export default About;
