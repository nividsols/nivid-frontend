import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] pb-16 w-screen ">
        <Navbar />
        <Hero />
      </div>
      <div>
        <Companies />
        <div>
          <Services />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
