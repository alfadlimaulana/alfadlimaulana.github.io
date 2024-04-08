import Cta from "../components/Cta";
import Experiences from "../components/Experiences";
import Hero from "../components/Hero";
import SelectedProjects from "../components/SelectedProjects";
import Portfolio from "../components/SelectedProjects";
import Tools from "../components/Tools";

const Home = () => {
  return (
    <>
      <Hero />
      <hr className="block h-[1px] border-0 bg-brand-yellow" />
      <div className="flex flex-col gap-20 mt-20">
        <div className="flex flex-col gap-10">
          <SelectedProjects />
          <Tools />
        </div>
        <hr className="block h-[1px] border-0 bg-brand-yellow" />
        <Experiences />
        <hr className="block h-[1px] border-0 bg-brand-yellow" />
        <Cta />
      </div>
    </>
  );
};

export default Home;
