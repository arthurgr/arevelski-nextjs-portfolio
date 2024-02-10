import { TechnicalSkillsItem } from "./TechnicalSkillsItem";

const config = [
  {
    category: "Programming Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "PHP", "HTML5", "SCSS", "LESS", "CSS"],
  },
  {
    category: "Web Technologies",
    items: [
      "React", "Svelte", "Vue", "Next", "React Query", "Zustand", "Redux",
      "Node", "Nest", "Spring Boot", "MSW", "Sagas", "Recharts", "D3", "Storybook"
    ],
  },
  {
    category: "Database Management",
    items: [
      "Postgres",
      "MySQL",
    ],
  },
  {
    category: "Testing Frameworks",
    items: ["Jest", "React Testing Library"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    category: "Build Tools",
    items: ["Vite", "Webpack", "Rollup", "Babel"],
  },
  {
    category: "Build Tools",
    items: ["Vite", "Webpack", "Rollup", "Babel"],
  },
  {
    category: "Design Systems",
    items: ["Tailwind", "Ant Design", "Bootstrap", "Material UI", "US Design Systems"],
  },
  {
    category: "Other Tools",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"],
  },
];

export default function TechnicalSkills() {
  return (
    <>
      <h1 className="text-lg font-bold text-blue-500 dark:text-blue-300">
        Technical Skills
      </h1>
      <div>
        {config.map((e) => {
          return <TechnicalSkillsItem key={e.category} config={e} />;
        })}
      </div>
    </>
  );
}
