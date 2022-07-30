const config = [
  {
    href: "https://www.linkedin.com/in/arthur-revelski-75894054/",
    title: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://github.com/arthurgr",
    title: "Github",
    target: "_blank",
  },
  {
    href: "https://dribbble.com/arthurrevelski",
    title: "Dribble",
    target: "_blank",
  },
  {
    href: "https://www.artiro.io/",
    title: "Consulting",
    target: "_blank",
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
                target={e.target}
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
