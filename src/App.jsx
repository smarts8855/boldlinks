import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Testimonies from "./components/Testimonies";
import OurCourses from "./components/OurCourses";

import Services from "./components/Services";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <Services />
      <OurCourses />
      {/* <Pricing /> */}
      <Testimonies />
      {/* 
      {btns.map((btn, index) => (
        <Button key={index} name={btn} />
      ))} */}

      <Footer />
    </div>
  );
}

export default App;
