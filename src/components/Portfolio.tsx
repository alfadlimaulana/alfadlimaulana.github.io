function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container text-center py-5">
        <h1 className="mb-4">Selected Portfolio</h1>
        <div className="row row-cols-sm-2 row-cols-lg-3 justify-content-center">
          <div className="col">
            <img src="img/portfolio-dummy.jpg" className="img-fluid" />
            <div className="mt-2">
              <h2>Project 1</h2>
              <a href="#">Demo</a>
            </div>
          </div>
          <div className="col">
            <img src="img/portfolio-dummy.jpg" className="img-fluid" />
            <div className="mt-2">
              <h2>Project 1</h2>
              <a href="#">Demo</a>
            </div>
          </div>
          <div className="col">
            <img src="img/portfolio-dummy.jpg" className="img-fluid" />
            <div className="mt-2">
              <h2>Project 1</h2>
              <a href="#">Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
