import { sendGAEvent } from '@next/third-parties/google'

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
      <ul className="mt-3 text-sm font-normal">
        {config.map((e) => {
          return (
              <li key={e.title} className="mt-1 hover:underline">
                <b>
                  <a
                      href={e.href}
                      title={e.title}
                      rel="noopener noreferrer"
                      target={e.target}
                      onClick={(e) => {
                        sendGAEvent({ event: 'buttonClicked', value: 'social link clicked' })
                      }}
                  >
                    {e.title}
                  </a>
                </b>
              </li>
          );
        })}
      </ul>
    </nav>
  );
}
