import Cta from "./components/Cta";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Tools from "./components/Tools";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="block h-[1px] border-0 bg-brand-yellow" />
        <div className="flex flex-col gap-20 mt-20">
          <div className="flex flex-col gap-10">
            <Portfolio />
            <Tools />
          </div>
          <hr className="block h-[1px] border-0 bg-brand-yellow" />
          <Experiences />
          <hr className="block h-[1px] border-0 bg-brand-yellow" />
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
