const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container grid gap-4 place-items-center md:grid-cols-2">
        <div>
          <h1 className="mb-2 text-5xl text-brand-yellow">Selected Portfolio</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et commodi, aspernatur labore exercitationem delectus deleniti, placeat est possimus corporis minima illo quidem pariatur?</p>
        </div>
        <div className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square">
          <img src="img/portfolio-dummy.jpg" className="object-cover w-full aspect-video md:max-lg:aspect-square" />
          <div className="absolute flex flex-col justify-end w-full h-full p-8 transition-all bg-black group-hover:-translate-y-full opacity-80">
            <h2 className="text-4xl font-semibold">Atma Asta: Etherna</h2>
            <a href="" className="font-light text-brand-yellow">
              See More <i className="text-xs fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square">
          <img src="img/portfolio-dummy.jpg" className="object-cover w-full aspect-video md:max-lg:aspect-square" />
          <div className="absolute flex flex-col justify-end w-full h-full p-8 transition-all bg-black group-hover:-translate-y-full opacity-80">
            <h2 className="text-4xl font-semibold">Atma Asta: Etherna</h2>
            <a href="" className="font-light text-brand-yellow">
              See More <i className="text-xs fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square">
          <img src="img/portfolio-dummy.jpg" className="object-cover w-full aspect-video md:max-lg:aspect-square" />
          <div className="absolute flex flex-col justify-end w-full h-full p-8 transition-all bg-black group-hover:-translate-y-full opacity-80">
            <h2 className="text-4xl font-semibold">Atma Asta: Etherna</h2>
            <a href="" className="font-light text-brand-yellow">
              See More <i className="text-xs fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
