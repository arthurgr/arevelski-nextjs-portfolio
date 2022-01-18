const config = [
  {
    href: "mailto:arevelski@gmail.com",
    title: "Email Arthur",
  },
  {
    href: "https://www.linkedin.com/in/arthur-revelski-75894054/",
    title: "LinkedIn",
  },
  {
    href: "https://github.com/arthurgr",
    title: "Github",
  },
  {
    href: "https://dribbble.com/arthurrevelski",
    title: "Dribble",
  },
  {
    href: "Arthur_Revelski_Resume.docx",
    title: "Resume",
  },
];

export default function Links() {
  return (
    <nav>
      <ul className="mt-3 text-sm font-normal">
        {config.map((e) => {
          return (
            <li key={e.title} className="mt-1 hover:underline">
              <a
                href={e.href}
                title={e.title}
                rel="noopener noreferrer"
                target="_blank"
              >
                <b>{e.title}</b>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
