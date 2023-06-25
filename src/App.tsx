import About from "./components/About";
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
        <Portfolio />
        <Experiences />
        <About />
        <Tools />
      </main>
      <Footer />
    </>
  );
}

export default App;
