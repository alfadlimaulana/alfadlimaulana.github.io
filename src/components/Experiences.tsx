import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import data from "./data/experiences.json";

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container">
        <h1 className="mb-4 text-4xl md:text-5xl text-brand-yellow md:text-center">Track Record</h1>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="mb-2 text-2xl md:text-3xl">Work Experience</h2>
            <Accordion type="single" collapsible className="w-full">
              {data.work.map((work) => {
                return (
                  <AccordionItem data-aos="fade-up" data-aos-duration="2500" value={`item-${work.id}`} className="border-0 group">
                    <AccordionTrigger className="px-5 border-b hover:no-underline bg-brand-blue group-first:rounded-t-md group-last:border-b-0 border-brand-yellow group-last:rounded-b-md ">
                      <div className="flex w-full gap-1 max-md:flex-col text-start md:items-center">
                        <div className="flex gap-1 max-lg:flex-col lg:items-center lg:gap-6">
                          <span className="text-sm font-light text-brand-yellow whitespace-nowrap">
                            {work.startDate} - {work.endDate}
                          </span>
                          <h3 className="text-xl md:text-2xl">{work.position}</h3>
                        </div>
                        <a href={work.companyLink} target="_blank" className="mr-6 font-light md:ml-auto hover:text-brand-yellow">
                          {work.company}
                        </a>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-10">
                      <ul className="py-5 list-disc">
                        {work.jobDesc.map((desc) => {
                          return <li>{desc}</li>;
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          <div>
            <h2 className="mb-2 text-2xl md:text-3xl">Education</h2>
            <Accordion type="single" collapsible className="w-full">
              {data.education.map((edu, index) => {
                return (
                  <AccordionItem key={index} data-aos="fade-up" data-aos-duration="2500" value={`item-${edu.id}`} className="border-0 group">
                    <AccordionTrigger className="px-5 border-b hover:no-underline bg-brand-blue group-first:rounded-t-md group-last:border-b-0 border-brand-yellow group-last:rounded-b-md">
                      <div className="flex w-full gap-1 max-md:flex-col text-start md:items-center">
                        <div className="flex gap-1 max-lg:flex-col lg:items-center lg:gap-6">
                          <span className="text-sm font-light text-brand-yellow whitespace-nowrap">
                            {edu.startDate} - {edu.endDate}
                          </span>
                          <h3 className="text-xl md:text-2xl">{edu.degree}</h3>
                        </div>
                        <span className="mr-6 font-light md:ml-auto">{edu.school}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-5">
                      <p className="py-5">
                        {edu.degree} Degree in {edu.major}, {edu.ipk}/{edu.maxIpk}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
