import { TypeAnimation } from "react-type-animation";
import { At, InstagramLogo, LinkedinLogo, GithubLogo } from "@phosphor-icons/react";

const Hero = () => {
  const sequence = ["Computer Science Bachelor", 1500, "Laravel Developer", 1500, "MERN Developer", 1500]
  return (
    <section id="hero" className="sm:py-8">
      <div className="container flex justify-center min-h-screen gap-12 md:items-center max-md:flex-col">
        <div className="md:w-full">
          <div>
            <h1 className="text-5xl xl:text-7xl leading-[52px] mb-0.5">Alfadli Siddik</h1>
            <h2 className="mb-4 text-3xl font-light xl:text-4xl">
              A <TypeAnimation sequence={sequence} wrapper="span" speed={50} className="text-brand-yellow" repeat={Infinity} />
            </h2>
            <p className="mb-6 leading-relaxed">
              My name is Alfadli Maulana Siddik, a highly disciplined person with an unwavering commitment to self-improvement. Fascinated by the digital landscape and its endless possibilities, I have specialized in web development to
              create meaningful online solutions.
            </p>
          </div>
          <div className="flex gap-2">
            <a data-aos="fade-up" data-aos-duration="2500" href="mailto:alfadlimaulana@gmail.com" target="_blank" className="sosmed">
              <At weight="bold" className="sosmed-icon"></At>
            </a>
            <a data-aos="fade-up" data-aos-duration="2500" data-aos-delay="400" href="https://www.linkedin.com/in/alfadlims/" target="_blank" className="sosmed">
              <LinkedinLogo weight="bold" className="sosmed-icon"></LinkedinLogo>
            </a>
            <a data-aos="fade-up" data-aos-duration="2500" data-aos-delay="800" href="https://www.instagram.com/alfadlims/" target="_blank" className="sosmed">
              <InstagramLogo weight="bold" className="sosmed-icon"></InstagramLogo>
            </a>
            <a data-aos="fade-up" data-aos-duration="2500" data-aos-delay="1200" href="https://github.com/alfadlims" target="_blank" className="sosmed">
              <GithubLogo weight="bold" className="sosmed-icon" />
            </a>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2500" className="w-full md:grid place-items-center">
          <div className="max-w-xs md:max-w-md aspect-square">
            <img src="img/alfadli.webp" alt="" className="object-cover w-full border-4 rounded-md border-brand-yellow " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
