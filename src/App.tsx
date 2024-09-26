import { AboutUs } from "./components/about-us";
import { Footer } from "./components/footer";
import { Home } from "./components/home";
import { OurClients } from "./components/our-clients";
import { OurTechnologyStack } from "./components/our-technology-stack";
import { OurSolution } from "./components/ourSolutions";
import { SuccessStories } from "./components/successStories";
import { Testimonials } from "./components/testimonials";
import { WebMob } from "./components/webmob";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <OurTechnologyStack />
      <OurSolution />
      <SuccessStories />
      <WebMob />
      <OurClients />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
