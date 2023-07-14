import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="py-8">
      <div className="container flex justify-center min-h-screen gap-12 py-8 md:items-center max-md:flex-col">
        <div className="md:w-full">
          <h1 className="text-5xl xl:text-7xl leading-[52px] mb-0.5">Alfadli Siddik</h1>
          <h2 className="mb-4 text-3xl font-light xl:text-4xl">
            A <TypeAnimation sequence={["Computer Science Student", 1500, "Front End Web Developer", 1500]} wrapper="span" speed={50} className="text-brand-yellow" repeat={Infinity} />
          </h2>
          <p className="mb-6 leading-relaxed">
            My name is Alfadli Maulana Siddik, a highly disciplined student with an unwavering commitment to self-improvement. Fascinated by the digital landscape and its endless possibilities, I have specialized in web development to
            create meaningful online solutions.
          </p>
          <div className="flex gap-2">
            <a href="mailto:alfadlimaulana@gmail.com" target="_blank" className="sosmed">
              <i className="sosmed-icon fa-solid fa-at"></i>
            </a>
            <a href="https://www.linkedin.com/in/alfadlims/" target="_blank" className="sosmed">
              <i className="sosmed-icon fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/alfadlims/" target="_blank" className="sosmed">
              <i className="font-bold sosmed-icon fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="w-full md:grid place-items-center">
          <div className="max-w-xs md:max-w-md aspect-square">
            <img src="img/alfadli.jpg" alt="" className="object-cover w-full border-4 rounded-md border-brand-yellow " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
