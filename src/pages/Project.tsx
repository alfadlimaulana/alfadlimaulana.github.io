import "@splidejs/react-splide/css";
import Hero from "../components/project/Hero";
import { Description, Props } from "../components/project/Description";
import { projects } from "../components/data/experiences.json";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  useEffect(() => {
    console.log();
  }, []);

  const { id } = useParams();
  const getProject = projects.filter((project, index) => {
    return project.id == parseInt(id);
  })[0];

  return (
    <div className="container flex flex-col justify-center min-h-screen gap-4 my-8">
      <Hero images={getProject.images} />
      <Description {...getProject} />
    </div>
  );
};

export default Project;
