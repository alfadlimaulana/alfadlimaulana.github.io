import { Globe, GithubLogo } from "@phosphor-icons/react";
import { Project } from "../../context/ProjectContext";
import { format } from "date-fns";

const getTechStack = (props: string): string => {
  switch (props) {
    case "laravel":
      return "laravel.png";
    case "react":
      return "react.png";
    case "tailwind":
      return "tailwind.png";
    case "bootstrap":
      return "bootstrap.png";
    case "next":
      return "next.png";
    case "typescript":
      return "typescript.png";
    case "codeigniter":
      return "codeigniter.png";
    case "alpine":
      return "alpine.png";
    case "mysql":
      return "mysql.png";
    case "mongo":
      return "mongo.png";
    case "express":
      return "express.png"
    default:
      return ''
  }
};

export const Description = (props: Project) => {
  return (
    <div>
      <section className="flex gap-4 max-sm:flex-col sm:items-center sm:justify-between">
        <div>
          <span>
            {format(new Date(props.startDate), 'MMM yyyy')} - {props.endDate ? format(new Date(props.endDate), 'MMM yyyy') : "Present"}
          </span>
          <h1 className="text-4xl md:text-5xl text-brand-yellow md:mb-1">{props.title}</h1>
          <h2 className="text-xl font-light md:text-2xl">{props.position}</h2>
        </div>
        <div className="flex gap-2">
          {props.link?.github && (
            <a data-aos="fade-up" data-aos-duration="2500" href={props.link.github} target="_blank" className="sosmed md:!w-14">
              <GithubLogo weight="bold" className="!text-2xl sosmed-icon" />
            </a>
          )}
          {props.link?.live && (
            <a data-aos="fade-left" data-aos-duration="2500" data-aos-delay={props.link.github ? "400" : "0"} href={props.link.live} target="_blank" className="sosmed md:!w-14">
              <Globe weight="bold" className="!text-2xl sosmed-icon" />
            </a>
          )}
        </div>
      </section>
      <hr className="my-4 block w-full h-[2px] border-0 bg-brand-yellow" />
      <section id="description">
        <p>{props.desc}</p>
        <div className="mt-4">
          <h2 className="text-2xl">Job Description</h2>
          <ul className="px-4 list-disc list-outside">
            {props.jobDesc?.map((item, index) => {
              return <li key={index}>{item.desc}</li>;
            })}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="mb-1 text-2xl">Tech Stack</h2>
          <div className="flex gap-2">
            {props.techStack?.map((item, index) => {
              return (
                <a data-aos="fade-up" data-aos-duration="2500" data-aos-delay={index * 400} key={index} className="grid p-2 border rounded-md place-items-center bg-brand-blue border-brand-yellow">
                  <img src={`../img/${getTechStack(item.tech as string)}`} className="max-w-[60px]" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
