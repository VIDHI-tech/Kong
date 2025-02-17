import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <footer className="bg-y relative">
        <span className="md:h-32 overflow-hidden hidden lg:block -top-14 md:-top-20 absolute right-20">
          <img src="/6grass.png" alt="" className="hidden lg:block h-full" />
        </span>
        <section className="flex flex-col items-center justify-center pt-10 lg:pt-32 gap-y-4">
          <img src="/footer-logo.png" alt="" />
          <p className="flex flex-col gap-y-2 pangolin-regular px-2 md:px-0 md:text-xl lg:text-2xl text-center">
            <span>
              Recently, a lot of SOL memecoins have been playing in the crypto backyard.
            </span>
            <span>
              These memes need a ruler; they need a king, and Kong is here for that.
            </span>
          </p>
          <p className="flex py-7 md:py-16 gap-4">
            <span className="bg-r px-2 rounded-full w-14 h-14 text-2xl flex items-center justify-center border border-e-4 border-y-1 border-l-1 border-black text-white">
              <FaTwitter />
            </span>
            <span className="bg-r px-2 rounded-full w-14 h-14 text-2xl flex items-center justify-center border border-e-4 border-y-1 border-l-1 border-black text-white">
              <FaTelegramPlane />
            </span>
            <span className="bg-r px-2 rounded-full w-14 h-14 text-2xl flex items-center justify-center border border-e-4 border-y-1 border-l-1 border-black text-white">
              <SiSolana />
            </span>
          </p>
          <p className="pangolin-regular text-xl lg:text-2xl pb-">@Kong  {new Date().getFullYear()}.
            <a href="/privacy" className="hover:text-[#167AC6]">{" "}
             All Rights Reserved
            </a>
          </p>
          <a href="https://palnesto.com/" className="pb-7 w-80" target="_blank">
           <img src="/palnesto.svg" alt="" className="w-full h-full"/>
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
