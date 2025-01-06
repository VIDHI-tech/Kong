import { FaTelegramPlane , FaTwitter } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-14 pb-28 bg-b text-white xl:px-[calc(50%-600px)] overflow-hidden ">
      <section className="flex flex-col space-y-6 gap-x-3 items-center md:items-start md:w-1/2">
        <h1 className="text-4xl lg:text-5xl xl:text-7xl font-extrabold uppercase passion-one-bold">
          <span className="text-y">Kong</span> is the sol
          <br /> memecoins king
        </h1>
        <p className="text-md lg:text-xl pangolin-regular flex justify-center text-center md:text-left">
        Recently, a lot of SOL memecoins have been playing in the crypto backyard. These memes need a ruler; they need a king, and Kong is here for that. Kong is here to provide a mix between utility and the meme concept on the SOL network. By holding it, you will enjoy a safe ride to the moon and rewards in your favorite SOL memecoins.
        </p>
        <span className="flex space-x-6 lg:space-x-14 text-xl items-center">
          <a
            href="#whitepaper"
            className="text-xl font-bold tracking-tighter bg-r border border-black border-e-4 border-b-4 border-l-0 border-t-0 px-5 py-2 rounded-md hover:bg-red-600"
          >
            Whitepaper
          </a>
          <span className="bg-g px-2 py-2 rounded-full border border-e-4 border-y-1 border-l-1 border-black text-black">
            <FaTwitter />
          </span>
          <span className="bg-g px-2 py-2 rounded-full border border-e-4 border-y-1 border-l-1 border-black text-black">
            <FaTelegramPlane  />
          </span>
          <span className="bg-g px-2 py-2 rounded-full border border-e-4 border-y-1 border-l-1 border-black text-black">
            <SiSolana />
          </span>
        </span>
      </section>
      <section className="relative md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
        <img
          className="absolute h-72 md:h-5/6 py-7"
          src="/hero.png" 
        />
        <img src="/banner-shape.png" alt="" className="animate-rotate" />
      </section> 
    </div>
  );
};

export default Home;
