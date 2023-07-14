import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
