const Cta = () => {
  return (
    <section id="cta">
      <div className="container max-md:text-center md:flex">
        <div className="w-full mb-6">
          <h1 className="mb-2 text-4xl xl:text-5xl text-brand-yellow">Want To Build A Website?</h1>
          <p className="xl:text-lg">Contact me via one of these platform</p>
        </div>
        <div>
          <div className="flex justify-center gap-2">
            <a href="mailto:alfadlimaulana@gmail.com" target="_blank" className="md:!w-14 sosmed">
              <i className="sosmed-icon fa-solid fa-at !md:text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/alfadlims/" target="_blank" className="md:!w-14 sosmed">
              <i className="sosmed-icon fa-brands fa-linkedin-in !md:text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/alfadlims/" target="_blank" className="md:!w-14 sosmed">
              <i className="sosmed-icon fa-brands fa-instagram !md:text-2xl font-bold"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
