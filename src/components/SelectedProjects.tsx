import { Link } from "react-router-dom";
import { projects } from "./data/experiences.json";
import axios from "axios";
import { Key, useEffect, useState } from "react";
import { Project } from "../context/ProjectContext";
import { Skeleton } from "./ui/skeleton";
import { buttonVariants } from "./ui/button";

interface ProjectCardProps {
  project: Project,
  index: Key
}

const SelectedProjects = () => {
  const selected = ["Invits.co", "Zada", "County Management System"]
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://portfolio-backend-3svr.onrender.com/api/projects`);
      // const res = await axios.get(`http://127.0.0.1:3000/api/projects`);
      const data = res.data.data;
      const filteredData = data.filter((item: Project) => selected.includes(item.title))
      
      setSelectedProjects(filteredData)
    }

    getData()
  }, [])

  return (
    <section id="portfolio">
      <div className="container grid gap-4 place-items-center md:grid-cols-2">
        <div className="p-4 justify-self-start">
          <h1 className="mb-2 text-4xl md:text-5xl text-brand-yellow">Selected Projects</h1>
          <p className="mb-6">Here's the top 3 of my projects that I consider the best.</p>
          <Link to={'/projects'} className={buttonVariants({ variant: "default" })}>More Projects</Link>
        </div>
        {
          selectedProjects.length != 0 ?
          selectedProjects.map((project, index) => {
            return <ProjectCard project={project} index={index} />
          })
          :
          <>
              <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
              <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
              <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
          </>
        }
      </div>
    </section>
  );
};

export const ProjectCard = (props: ProjectCardProps) => {
  const {project, index} = props
  return <div key={index} data-aos="zoom-in" data-aos-duration="1200" className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square">
  <img src={`https://portfolio-backend-3svr.onrender.com/${project.images?.[0]}`} className="object-cover w-full aspect-video md:max-lg:aspect-square" />
  <div className="absolute flex flex-col justify-end w-full h-full p-8 transition-all bg-black scale-[1.002] max-md:-translate-y-full md:group-hover:-translate-y-full opacity-80">
    <h2 className="text-xl font-semibold sm:text-3xl md:text-4xl">{project.title}</h2>
    <Link to={`/project/${project._id}`} className="font-light text-brand-yellow">
      See More <i className="text-xs fa-solid fa-arrow-right-long"></i>
    </Link>
  </div>
</div>
}

export default SelectedProjects;
