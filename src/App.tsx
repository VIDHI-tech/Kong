
import Home from "./components/Home";
import Navbar from "./components/Navbar";  
import Missed from "./components/Missed";
import Presale from "./components/Presale";
import Footer from "./components/Footer"; 
import Roadmap from "./components/Roadmap";
import Ready from "./components/Ready";

function App() {
  return (
    <>
      <main className="bg-b"> 
        <Navbar /> 
        <Home />
        <Presale /> 
        <Missed/>
        <Roadmap />
        <Ready/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
