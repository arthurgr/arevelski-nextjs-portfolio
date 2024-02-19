import LinksItem from "./LinksItem";

const config = [
  {
    href: "https://www.linkedin.com/in/arthur-revelski/",
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
      <ul className="text-sm font-normal">
        {config.map((e) => {
          return (
              <LinksItem key={e.href} props={e} />
          );
        })}
      </ul>
    </nav>
  );
}
