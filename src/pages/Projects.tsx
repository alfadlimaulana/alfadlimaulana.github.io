import axios from 'axios';
import { useEffect, useState } from 'react'
import { Project } from '../context/ProjectContext';
import { ProjectCard } from '../components/SelectedProjects';
import { Skeleton } from '../components/ui/skeleton';

function Projects() {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const getData = async () => {
          const res = await axios.get(`https://portfolio-backend-3svr.onrender.com/api/projects`);
          const data = res.data.data;
          
          setProjects(data)
        }
    
        getData()
      }, [])

    return (
        <section className='py-10'>
            <div className='container'>
                <h1 className="text-5xl text-brand-yellow text-center mb-6">My Projects</h1>
                <div className='grid gap-8 place-items-center md:grid-cols-2'>
                {
                    projects.length != 0 ?
                    projects.map((project, index) => {
                        return <ProjectCard project={project} index={index} />
                    })
                    :
                    <>
                        <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
                        <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
                        <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
                        <Skeleton className="relative w-full overflow-hidden rounded-md group aspect-video md:max-lg:aspect-square" />
                    </>
                }
                </div>
            </div>
        </section>
    )
}

export default Projects