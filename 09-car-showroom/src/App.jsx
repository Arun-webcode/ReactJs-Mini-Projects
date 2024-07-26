import Navbar from "./navbar/Navbar";
// import Logform from "./Logform";
// import Section from "./section/Section";
import Home from "./Home";
import Footer from "./Footer";
// import FAQ from "./FAQ";
// import TestimonialSlider from "./Reviews";
import Info from "./Info";
import HomeNew from "./HomeNew";
// import Popup from "./Popup";
import CarsCollection from "./CarsCollection";
import WhyMRTT from "./WhyMRTT";
const App = () => {
  return (
    <div className=" h-full w-[100vw] bg-orange-400 flex-col overflow-hidden ">
      <Navbar />
      {/* <Home /> */}
      {/* <HeroSection /> */}
      <HomeNew />
      {/* <Popup /> */}

      {/* <Section /> */}

      {/* <Logform /> */}
      {/* <Home /> */}
      {/* <TestimonialSlider /> */}
      <Info />
      <CarsCollection />

      <Home />
      <WhyMRTT />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};
export default App;
