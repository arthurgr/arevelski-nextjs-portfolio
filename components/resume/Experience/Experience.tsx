import { ExperienceItem } from "./ExperienceItem";

const config = [
  {
    position: "Lead UI Engineer",
    title: "ManagedMethods Inc",
    location: "Boulder, CO",
    time: "July 2021 - Present",
    description:
      "Design, develop, and maintain K-12 cloud monitoring software. Define UI architectural specifications and system requirements. Establish team processes, best practices, and provide technical leadership to junior developers.",
  },
  {
    position: "UI/UX Front-End Developer",
    title: "Douglas County Schools",
    location: "Castle Rock, CO",
    time: "Dec 2015 - July 2021",
    description:
      "Collaborated closely with engineers, stakeholders, and product managers throughout the lifecycle of application planning, design, development, and testing. Determined application or feature success based on stakeholder feedback.",
  },
  {
    position: "UI/UX Developer",
    title: "Blackboard Technology and Solutions",
    location: "Denver, CO",
    time: "Oct 2011 - Sept 2015",
    description:
      "Generated prototypes and UI deliverables including wireframes, flowcharts, screen mock-ups, and interface specifications. Designed and developed components and features that integrated into multiple Blackboard software platforms.",
  },
  {
    position: "Front End Designer/Developer",
    title: "SchoolCenter An Edline Solution",
    location: "Carbondale, IL",
    time: "Mar 2008 - Oct 2011",
    description:
      "Created and developed wire-frames, mockups, and high fidelity designs based on product managers business requirements. Established branding, media, and website designs for school districts across the U.S. Converted Abobe Flash websites to Responsive HTML alternatives, ensuring that sites could be viewed on all devices.",
  },
];

export default function Experience() {
  return (
    <section>
      <h1 className="text-lg font-bold text-blue-500 dark:text-blue-300">
        Experience
      </h1>
      <ul className="lg:max-w-xl">
        {config.map((e) => {
          return <ExperienceItem key={e.title} config={e} />;
        })}
      </ul>
    </section>
  );
}
