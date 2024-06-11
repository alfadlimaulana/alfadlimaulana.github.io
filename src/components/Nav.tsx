import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  const [navOpen, setnavOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={`${location.pathname == "/" ? "fixed" : "sticky"} sm:h-16 z-50 w-full bg-brand-yellow transition-all ${navOpen ? "" : "max-sm:-translate-y-full"}`}>
      <div className={`container py-5`}>
        <ul className="flex items-center justify-center max-sm:flex-col max-sm:gap-4">
          <li className="px-5 py-0 list-none">
            <HashLink className="text-brand-blue hover:text-brand-grey" to="/#hero">
              About
            </HashLink>
          </li>
          <li className="px-5 py-0 list-none">
            <HashLink className="text-brand-blue hover:text-brand-grey" to="/#portfolio">
              Portfolio
            </HashLink>
          </li>
          <li className="px-5 py-0 list-none">
            <HashLink className="text-brand-blue hover:text-brand-grey" to={`/#experiences`}>
              Track Record
            </HashLink>
          </li>
          <li className="px-5 py-0 list-none">
            <HashLink className="text-brand-blue hover:text-brand-grey" to={"/#cta"}>
              Contact
            </HashLink>
          </li>
          <li className="px-5 py-0 list-none">
            <a target="_blank" className="text-brand-blue hover:text-brand-grey" href="https://medium.com/@alfadlimaulana">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute grid w-20 -translate-x-1/2 left-1/2 place-items-center bg-brand-yellow sm:hidden" onClick={() => setnavOpen(!navOpen)}>
        <i className="text-black fa-solid fa-caret-down"></i>
      </div>
    </nav>
  );
};

export default Nav;
