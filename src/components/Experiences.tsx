function Experiences() {
  return (
    <section>
      <div className="container py-5">
        <h1 className="mb-4 text-center">My Experiences</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div className="d-flex flex-column flex-md-row align-items-md-center flex-grow-1">
                  <span className="me-3">2020-2022</span>
                  <h2 className="d-inline-block">Accordion Item #1</h2>
                  <span className="ms-md-auto me-3">Location</span>
                </div>
              </button>
            </div>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="d-flex flex-column flex-md-row align-items-md-center flex-grow-1">
                  <span className="me-3">2020-2022</span>
                  <h2 className="d-inline-block">Accordion Item #1</h2>
                  <span className="ms-md-auto me-3">Location</span>
                </div>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <div className="d-flex flex-column flex-md-row align-items-md-center flex-grow-1">
                  <span className="me-3">2020-2022</span>
                  <h2 className="d-inline-block">Accordion Item #1</h2>
                  <span className="ms-md-auto me-3">Location</span>
                </div>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
