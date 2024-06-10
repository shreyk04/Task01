import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import RoomsSection from "./Components/RoomsSection";
import Services from "./Components/Services";
import Map from "./Components/GoogleMap";
import Form from "./Components/Form";
import Banner from "./Components/Banner";
import { useRef } from "react";
import GoogleMap from "./Components/GoogleMap";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const roomsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        roomsRef={roomsRef}
        galleryRef={galleryRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={roomsRef}>
        <RoomsSection />
      </div>
      <Banner />

      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={contactRef}>
        <Form />
      </div>

      <GoogleMap />
      <Footer />
    </div>
  );
}

export default App;
