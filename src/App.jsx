import Features from "./components/Features";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import PhoneModel from "./components/PhoneModel";

const App = () => {
  return (
    <main className="b-black">
      <Navbar />
      <Hero />
      <Highlights />
      <PhoneModel />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default App;
