function Hero() {
  return (
    <section id="hero">
      <div className="container py-5 text-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="badge bg-secondary px-4 py-2 mb-3 position-relative">
            Hi, I'm Alfadli
            <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">New alerts</span>
            </span>
          </span>
          <h1 className="mb-3">
            A Student & <br /> Front End Web Developer
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit voluptatibus magnam porro exercitationem dignissimos, eum optio. Amet neque incidunt praesentium. Impedit eaque iure cupiditate saepe molestias
            pariatur officia unde.
          </p>
          <span className="mt-5">
            Scroll to know more <br /> <i className="fa-solid fa-arrow-down-long mt-3"></i>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
