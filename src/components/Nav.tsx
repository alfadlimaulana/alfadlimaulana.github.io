import { useState } from "react";

const Nav = () => {
  const [navOpen, setnavOpen] = useState(false);

  return (
    <nav className={`fixed z-50 w-full bg-brand-yellow transition-all ${navOpen ? "" : "max-sm:-translate-y-full"}`}>
      <div className={`container py-5`}>
        <ul className="flex items-center justify-center max-sm:flex-col max-sm:gap-4">
          <li className="px-5 py-0 list-none">
            <a className="text-brand-blue hover:text-brand-grey" href="#hero">
              About
            </a>
          </li>
          <li className="px-5 py-0 list-none">
            <a className="text-brand-blue hover:text-brand-grey" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="px-5 py-0 list-none">
            <a className="text-brand-blue hover:text-brand-grey" href="#experiences">
              Track Record
            </a>
          </li>
          <li className="px-5 py-0 list-none">
            <a className="text-brand-blue hover:text-brand-grey" href="#cta">
              Contact
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
