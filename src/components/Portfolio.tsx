import { Link } from "react-router-dom";
import { projects } from "./data/experiences.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { Project } from "../context/ProjectContext";

const Portfolio = () => {
  const selected = ["Invits.co", "Zada", "County Management System"]
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://portfolio-backend-3svr.onrender.com/api/projects`);
      const data = res.data.data;
      const filteredData = data.filter((item: Project) => selected.includes(item.title))
      
      setSelectedProjects(filteredData)
    }

    getData()
  }, [])
  

  return (
    <section id="portfolio">
      <div className="container grid gap-4 place-items-center md:grid-cols-2">
        <div className="p-4">
          <h1 className="mb-2 text-5xl text-brand-yellow">Selected Portfolio</h1>
          <p>I have worked on more than 10 projects in total, but here I have chosen the top 3 that I consider the best.</p>
        </div>
        {selectedProjects.map((project, index) => {
          return (
            <div key={index} data-aos="zoom-in" data-aos-duration="1200" className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square">
              <img src={`https://portfolio-backend-3svr.onrender.com/${project.images?.[0]}`} className="object-cover w-full aspect-video md:max-lg:aspect-square" />
              <div className="absolute flex flex-col justify-end w-full h-full p-8 transition-all bg-black scale-[1.002] max-md:-translate-y-full md:group-hover:-translate-y-full opacity-80">
                <h2 className="text-xl font-semibold sm:text-3xl md:text-4xl">{project.title}</h2>
                <Link to={`/project/${project._id}`} className="font-light text-brand-yellow">
                  See More <i className="text-xs fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
