import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Presale from "./components/Presale";
import Roadmap from "./components/Roadmap";
import Whitepaper from "./components/Whitepaper";

function App() {
  return (
    <>
      <div className="bg-b"> 
        <Navbar /> 
        <Home />
        <About/>
        {/* <Whitepaper /> */}
        {/* <Presale /> */}
        {/* <Roadmap /> */}
      </div>
      {/* <Nav />
      <div className="lg:px-[calc(50%-600px)]">
        <Hero />
        <Seen />
        <About />
      </div> */}
    </>
  );
}

export default App;
