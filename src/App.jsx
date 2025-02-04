// import Button from "./components/Button";

import Footer from "./components/Footer";
import Hero from "./components/Hero";

import HourTeam from "./components/HourTeam";
import OurCourses from "./components/OurCourses";
// import Pricing from "./components/Pricing";
import Services from "./components/services";
// import Header from "./components/Header";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Services />
      <OurCourses />
      {/* <Pricing /> */}
      <HourTeam />
      {/* 
      {btns.map((btn, index) => (
        <Button key={index} name={btn} />
      ))} */}

      <Footer />
    </div>
  );
}

export default App;
