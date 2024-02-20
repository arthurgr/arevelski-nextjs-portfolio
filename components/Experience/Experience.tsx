import { ExperienceItem } from "./ExperienceItem";

const config = [
  {
    position: "Software Engineer",
    title: "ManagedMethods Inc",
    location: "Boulder, CO",
    time: "July 2021 - Present",
    description: [
      "Define and enforce UI architectural decisions and project requirements.",
      "Establish team processes, best practices, and provide technical leadership to junior developers.",
      "Successfully migrated legacy UI platform to Typescript and React, resulting in improved application efficiency and enhanced experience for both users and developers.",
    ],
  },
  {
    position: "Front End Engineer",
    title: "Douglas County Schools ",
    location: "Castle Rock, CO",
    time: "Dec 2015 - July 2021",
    description: [
      "Audited district applications and ensured compliance with WCAG accessibility standards.",
      "Advocated and implemented API-first design methodology, resulting in a significant enhancement in the scalability of district applications.",
      "Implemented integration, unit, and end-to-end tests to enhance code coverage, streamlining workflow efficiency, and instilling developer confidence in making changes affecting multiple applications using Jest and React Testing Library.",
    ],
  },
  {
    position: "UX Developer",
    title: "Blackboard Technology",
    location: "Denver, CO",
    time: "Oct 2011 - Sept 2015",
    description: [
      "Produced prototypes and comprehensive UI deliverables, encompassing wireframes, flowcharts, and screen mock-ups using Figma, Adobe XD, and other design tools.",
      "Engineered design system components and seamlessly integrated features across diverse Blackboard software platforms.",
      "Gathered user feedback and integrated it into development changes to enhance the product, ultimately increasing user satisfaction.",
    ],
  },
  {
    position: "Front End Designer",
    title: "SchoolCenter",
    location: "Carbondale, IL",
    time: "Mar 2008 - Oct 2011",
    description: [
      "Led the development of branding, media, and website designs for school districts nationwide.",
      "Successfully converted Adobe Flash websites to responsive HTML alternatives, ensuring optimal cross-device compatibility.",
      "Produced wireframes, mockups, and high-fidelity designs in alignment with customers specifications.",
    ],
  },
];

export default function Experience() {
  return (
    <>
      <h1 className="text-lg font-bold text-blue-500 dark:text-blue-300">
        Experience
      </h1>
      {config.map((e) => {
        return <ExperienceItem key={e.title} props={e} />;
      })}
    </>
  );
}
