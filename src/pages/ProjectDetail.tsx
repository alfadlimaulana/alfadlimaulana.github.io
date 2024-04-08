import "@splidejs/react-splide/css";
import Hero from "../components/project/Hero";
import { Description } from "../components/project/Description";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Project } from "../context/ProjectContext";
import { Skeleton } from "../components/ui/skeleton";

const ProjectDetail = () => {
  const [project, setProject] = useState<Project>({
    _id: "",
    title: "",
    position: "",
    startDate: new Date(),
  })
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://portfolio-backend-3svr.onrender.com/api/projects/${params.id}`);
      const { __v, createdAt, updatedAt, ...rest} = res.data.data

      rest.techStack = rest.techStack.map((item: {tech:string}) => ({tech: item.tech}))
      rest.jobDesc = rest.jobDesc.map((item: {desc:string}) => ({desc: item.desc}))
      delete rest.link._id

      setProject(rest)
    }

    getData()
  }, []);
  

  return (
    <div className="container flex flex-col justify-center min-h-screen gap-4 py-8 sm:pt-24">
      {
        project ?
        <Hero images={project?.images as string[]} />
        :
        <Skeleton className="w-full h-[422px] rounded-md group" />
      }
      <Description {...project} />
    </div>
  );
};

export default ProjectDetail;
