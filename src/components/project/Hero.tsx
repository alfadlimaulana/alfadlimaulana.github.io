import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FsLightbox from "fslightbox-react";
import { useRef, useState } from "react";

export interface Props {
  images?: string[];
}

const Hero = (props: Props) => {
  const mainRef = useRef<Splide>(null);
  const [toggler, setToggler] = useState(false);
  const handleThumbs = (id: number) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };
  const mainOptions: Options = {
    type: "fade",
    perPage: 1,
    perMove: 1,
    pagination: false,
    mediaQuery: "min",
    width: "100%",
    height: "422px",
    breakpoints: {
      1024: {
        width: "80%",
      },
    },
  };
  const thumbOptions: Options = {
    direction: "ttb",
    perPage: 4,
    perMove: 1,
    gap: "8px",
    pagination: false,
    width: "100%",
    height: "422px",
    mediaQuery: "min",
    breakpoints: {
      1024: {
        width: "20%",
      },
      1536: {
        perPage: 3,
      },
    },
  };
  return (
    <div className="flex w-full gap-4">
      <Splide options={mainOptions} ref={mainRef}>
        {props.images?.map((image, index) => {
          return (
            <SplideSlide key={index} onClick={() => setToggler(!toggler)}>
              <img src={`${import.meta.env.VITE_API_URL}/${image}`} alt={`project img ${index}`} className="object-cover object-center w-full h-full rounded-lg" />
            </SplideSlide>
          );
        })}
      </Splide>

      <Splide options={thumbOptions} className="max-lg:hidden">
        { props.images?.map((thumbnail, index) => (
          <SplideSlide key={index}>
            <button onClick={() => handleThumbs(index)} className="w-full h-full ">
              <img src={`${import.meta.env.VITE_API_URL}/${thumbnail}`} alt={`thumbnail img ${index}`} className="object-cover w-full h-full rounded-lg cursor-ceobject-center-pointer object" />
            </button>
          </SplideSlide>
        )) }
      </Splide>

      <FsLightbox
        toggler={toggler}
        sources={props.images?.map((image, index) => {
          return `${import.meta.env.VITE_API_URL}/${image}`;
        })}
      />
    </div>
  );
};

export default Hero;
