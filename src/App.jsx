import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import ContactUs from "./components/ContactUs.jsx";

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
      <div className="relative bg-[#F6F6F6] pt-96 mt-[32rem] md:mt-[20rem]">
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
