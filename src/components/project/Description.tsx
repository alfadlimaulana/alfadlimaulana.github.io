import { Globe, GithubLogo } from "@phosphor-icons/react";

export interface Props {
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
  desc: string;
  jobDesc: string[];
  images: string[];
  link?: {
    github?: string;
    live?: string;
  };
  techStack: string[];
}

const getTechStack = (props: string): string => {
  switch (props) {
    case "laravel":
      return "laravel.png";
      break;
    case "react":
      return "react.png";
      break;
    case "tailwind":
      return "tailwind.png";
      break;
    case "bootstrap":
      return "bootstrap.png";
      break;
    case "next":
      return "next.png";
      break;
    case "typescript":
      return "typescript.png";
      break;
    case "php":
      return "php.png";
      break;
    case "codeigniter":
      return "codeigniter.png";
      break;
    case "alpine":
      return "alpine.png";
      break;
    default:
      return ''
      break;
  }
};

export const Description = (props: Props) => {
  return (
    <div>
      <section id="hero" className="flex gap-4 max-sm:flex-col sm:items-center sm:justify-between">
        <div>
          <span>
            {props.startDate} - {props.endDate}
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
            {props.jobDesc.map((desc, index) => {
              return <li key={index}>{desc}</li>;
            })}
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="mb-1 text-2xl">Tech Stack</h2>
          <div className="flex gap-2">
            {props.techStack.map((tech, index) => {
              return (
                <a data-aos="fade-up" data-aos-duration="2500" data-aos-delay={index * 400} key={index} className="grid p-2 border rounded-md place-items-center bg-brand-blue border-brand-yellow">
                  <img src={`../img/${getTechStack(tech)}`} className="max-w-[60px]" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
