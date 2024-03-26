import { TechnicalSkillsItem } from "./TechnicalSkillsItem";

const config = [
  {
    category: "Programming Languages",
    items: [
      {
        alt: "TypeScript",
        src: "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
      },
      {
        alt: "JavaScript (ES6+)",
        src: "https://img.shields.io/badge/JavaScript%20(ES6%2B)-%23F7DF1E?style=flat-square&logo=javascript&logoColor=%23fff\n",
      },
      {
        alt: "PHP",
        src: "https://img.shields.io/badge/PHP-%23777BB4?style=flat-square&logo=php&logoColor=%23fff\n",
      },
      {
        alt: "html5",
        src: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
      },
      {
        alt: "Sass",
        src: "https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white",
      },
      {
        alt: "LESS",
        src: "https://img.shields.io/badge/Less-%231D365D?style=flat-square&logo=less&logoColor=%23fff\n",
      },
      {
        alt: "CSS3",
        src: "https://img.shields.io/badge/CSS3-%231572B6?style=flat-square&logo=css3&logoColor=%23fff\n",
      },
    ],
  },
  {
    category: "Web Technologies",
    items: [
      {
        alt: "React",
        src: "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=%23fff",
      },
      {
        alt: "Vue",
        src: "https://img.shields.io/badge/-Vue-4FC08D?style=flat-square&logo=vue.js&logoColor=%23fff",
      },
      {
        alt: "NextJs",
        src: "https://img.shields.io/badge/-Next-000000?style=flat-square&logo=next.js&logoColor=%23fff",
      },
      {
        alt: "ReactQuery",
        src: "https://img.shields.io/badge/-React_Query-FF4154?style=flat-square&logo=reacttable&logoColor=fff",
      },
      {
        alt: "React Native",
        src: "https://img.shields.io/badge/-React_Native-61DAFB?style=flat-square&logo=react&logoColor=000",
      },
      {
        alt: "Zustand",
        src: "https://img.shields.io/badge/-Zustand-7CC631?style=flat-square&logoColor=%23fff",
      },
      {
        alt: "Redux",
        src: "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white",
      },
      {
        alt: "MobX",
        src: "https://img.shields.io/badge/-MobX-FF7102?style=flat-square&logo=mobx&logoColor=fff",
      },
      {
        alt: "NodeJS",
        src: "https://img.shields.io/badge/-Node-339933?style=flat-square&logo=node.js&logoColor=white",
      },
      {
        alt: "npm",
        src: "https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white",
      },
      {
        alt: "Yarn",
        src: "https://img.shields.io/badge/-Yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=fff",
      },
      {
        alt: "NestJS",
        src: "https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=NestJS&logoColor=%23fff",
      },
      {
        alt: "Spring Boot",
        src: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=%23fff",
      },
      {
        alt: "Docker",
        src: "https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white",
      },
      {
        alt: "Styled Components",
        src: "https://img.shields.io/badge/-Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=fff",
      },
      {
        alt: "Mock Service Worker",
        src: "https://img.shields.io/badge/-MobX-FF7102?style=flat-square&logo=mobx&logoColor=fff",
      },
      {
        alt: "Redux Saga",
        src: "https://img.shields.io/badge/-ReduxSaga-999999?style=flat-square&logo=reduxsaga&logoColor=%23fff",
      },
      {
        alt: "d3js",
        src: "https://img.shields.io/badge/-D3.js-F9A03C?style=flat-square&logo=d3.js&logoColor=white",
      },
      {
        alt: "Storybook",
        src: "https://img.shields.io/badge/-Storybook-09B3AF?style=flat-square&logo=storybook&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Database Management",
    items: [
      {
        alt: "PostgreSQL",
        src: "https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white",
      },
      {
        alt: "MySQL",
        src: "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Testing Frameworks",
    items: [
      {
        alt: "Jest",
        src: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
      },
      {
        alt: "React Testing Library",
        src: "https://img.shields.io/badge/-React%20Testing%20Library-E33332?style=flat-square&logo=testinglibrary&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        alt: "git",
        src: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
      },
      {
        alt: "GitLab",
        src: "https://img.shields.io/badge/Gitlab-FC6D26?style=flat-square&logo=gitlab&logoColor=%23fff",
      },
      {
        alt: "GitHub",
        src: "https://img.shields.io/badge/Github-%23181717?style=flat-square&logo=github&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Build Tools",
    items: [
      {
        alt: "Vite",
        src: "https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=%23fff",
      },
      {
        alt: "Webpack",
        src: "https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white",
      },
      {
        alt: "Rollup",
        src: "https://img.shields.io/badge/-Rollup-EC4A3F?style=flat-square&logo=rollup.js&logoColor=white",
      },
      {
        alt: "Babel",
        src: "https://img.shields.io/badge/Bable-%23F9DC3E?style=flat-square&logo=babel&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Design Systems",
    items: [
      {
        alt: "Tailwind CSS",
        src: "https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwind-css&logoColor=fff",
      },
      {
        alt: "Ant Design",
        src: "https://img.shields.io/badge/Ant%20Design-%230170FE?style=flat-square&logo=antdesign&logoColor=%23fff",
      },
      {
        alt: "Bootstrap",
        src: "https://img.shields.io/badge/Bootstrap-%237952B3?style=flat-square&logo=bootstrap&logoColor=%23fff",
      },
      {
        alt: "Material UI",
        src: "https://img.shields.io/badge/Material%20UI-%23757575?style=flat-square&logo=materialdesign&logoColor=%23fff",
      },
    ],
  },
  {
    category: "Other Tools",
    items: [
      {
        alt: "Figma",
        src: "https://img.shields.io/badge/Figma-%23F24E1E?style=flat-square&logo=figma&logoColor=%23fff",
      },
      {
        alt: "Adobe XD",
        src: "https://img.shields.io/badge/Adobe%20XD-%23FF61F6?style=flat-square&logo=adobexd&logoColor=%23fff",
      },
      {
        alt: "Photoshop",
        src: "https://img.shields.io/badge/Photoshop-%2331A8FF?style=flat-square&logo=adobephotoshop&logoColor=%23fff",
      },
      {
        alt: "Illustrator",
        src: "https://img.shields.io/badge/Illustrator-%23FF9A00?style=flat-square&logo=adobeillustrator&logoColor=%23fff",
      },
      {
        alt: "Sketch",
        src: "https://img.shields.io/badge/Sketch-%23F7B500?style=flat-square&logo=sketch&logoColor=%23fff",
      },
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <>
      <h1 className="text-lg font-bold text-blue-500 dark:text-blue-300">
        Technical Skills
      </h1>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Although its hard to list everything, here&apos;s a sneak peek at tools
        I&apos;ve worked with over the years:
      </p>
      {config.map((e) => {
        return <TechnicalSkillsItem key={e.category} props={e} />;
      })}
    </>
  );
}
