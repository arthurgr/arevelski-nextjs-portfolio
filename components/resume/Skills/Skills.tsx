import { SkillsItem } from "./SkillsItem";

const config = [
  {
    category: "Javascript",
    items: [
      "Typescript",
      "React",
      "Next JS",
      "Webpack",
      "Redux / Sagas",
      "Node",
      "Jest",
      "Storybook",
    ],
  },
  {
    category: "Other Languages",
    items: ["GIT", "PHP", "SCSS", "SASS", "CSS", "Linux", " HTML5"],
  },
  {
    category: "Design Systems",
    items: [
      "Tailwind",
      "Ant Design",
      "Bootstrap",
      "Material UI",
      "US Design Systems",
    ],
  },
  {
    category: "Design Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch "],
  },
  {
    category: "Application Planning",
    items: [
      "Accessibility",
      "Product Design",
      "UX Design & Research",
      "User Interactions",
      "UI Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section>
      <h1 className="mt-12 text-lg font-bold text-blue-500 dark:text-blue-300">
        Technology
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {config.map((e) => {
          return <SkillsItem key={e.category} config={e} />;
        })}
      </div>
    </section>
  );
}
