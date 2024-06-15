import ButtonGradiant from "./assets/svg/ButtonGradient";
import Benefits from "./componets/Benefits";
import Button from "./componets/Button";
import Collaboration from "./componets/Collaboration";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Hero from "./componets/Hero";
import Pricing from "./componets/Pricing";
import Roadmap from "./componets/Roadmap";
import Services from "./componets/Services";
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline ">Hello world!</h1>
      <div className="pt-[4-.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* <Button className="mt-10" href='#lign'>
          somthing
        </Button> */}
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
    </>
  );
};

export default App;
