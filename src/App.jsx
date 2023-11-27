import Testimonial from "./sections/testimonial";
import Destinations from "./sections/destinations";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import NextTrip from "./sections/nexttrip";
import Partners from "./sections/partners";
import Services from "./sections/services";
import Subscribe from "./sections/subscribe";
import Navbar from "./sections/navbar";
import "react-modern-drawer/dist/index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <NextTrip />
      <Testimonial />
      <Partners />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
