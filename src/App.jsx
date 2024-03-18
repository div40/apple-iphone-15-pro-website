import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import PhoneModel from "./components/PhoneModel";

const App = () => {
  return (
    <main className="b-black">
      <Navbar />
      <Hero />
      <Highlights />
      <PhoneModel />
    </main>
  );
};

export default App;
