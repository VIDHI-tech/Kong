
const Ready = () => {
  return (
    <section id="roadmap" className="bg-b">
      {/* <h1 className="text-4xl font-bold">Roadmap</h1> */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-start text-white gap-7">
        <figure className="h-96 md:h-full">
          <img src="/gorilla.png" alt="" className="w-full h-full object-contain"/>
        </figure>
        <span className="md:max-w-[50%] px-4 xl:px-10 2xl:px-32">
          <h1 className="text-5xl xl:text-7xl passion-one-bold">ARE YOU READY?</h1>
          <p className="pangolin-regular text-xl py-10">
            Recently, a lot of SOL memecoins have been playing in the crypto backyard.
            These memes need a ruler; they need a king, and Kong is here for that. 
            Kong is here to provide a mix between utility and the meme concept on the SOL network. 
            By holding it, you will enjoy a safe ride to the moon and rewards in your favorite SOL memecoins.
          </p>
          <a
            href="#whitepaper"
            className="text-xl font-bold tracking-tighter bg-r border border-black border-e-4 border-b-4 border-l-0 border-t-0 px-5 py-3 rounded-lg hover:bg-red-600"
          >
            Whitepaper
          </a>
        </span>
      </div>
    </section>
  );
};

export default Ready;
