import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Tools() {
  return (
    <section id="tools">
      <div className="container flex gap-4 md:items-center max-md:flex-col">
        <h1 className="text-5xl md:w-2/5 text-brand-yellow">Tools Used</h1>
        <div className="md:w-3/5">
          <Splide
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              perPage: 1,
              gap: "12px",
              width: "100%",
              padding: "20%",
              arrows: false,
              pagination: false,
              autoplay: false,
              interval: 2000,
              mediaQuery: "min",
              breakpoints: {
                640: {
                  perPage: 2,
                  padding: "10%",
                },
                1024: {
                  perPage: 3,
                },
                1280: {
                  perPage: 4,
                  padding: "8%",
                },
              },
            }}
          >
            <SplideSlide className="grid p-6 border rounded-md place-items-center bg-brand-blue border-brand-yellow">
              <a>
                <img src="img/React-icon.png" className="max-w-[60px]" />
              </a>
            </SplideSlide>
            <SplideSlide className="grid p-6 border rounded-md place-items-center bg-brand-blue border-brand-yellow">
              <a>
                <img src="img/React-icon.png" className="max-w-[60px]" />
              </a>
            </SplideSlide>
            <SplideSlide className="grid p-6 border rounded-md place-items-center bg-brand-blue border-brand-yellow">
              <a>
                <img src="img/React-icon.png" className="max-w-[60px]" />
              </a>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}

export default Tools;
