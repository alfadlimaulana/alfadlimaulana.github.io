import { useState } from "react";

function Nav() {
  const [navColored, setNavColored] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setNavColored(true);
    } else {
      setNavColored(false);
    }
  });

  return (
    <header>
      <nav className={`navbar navbar-expand-lg fixed-top ${navColored ? "bg-body-tertiary" : "bg-transparent"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link disabled">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
