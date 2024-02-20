import { sendGAEvent } from "@next/third-parties/google";

export default function LinksItem({
  props,
}: {
  props: { title: string; href: string; target: string };
}) {
  return (
    <li key={props.title} className="hover:underline mb-2">
      <b>
        <a
          href={props.href}
          title={props.title}
          rel="noopener noreferrer"
          target={props.target}
          onClick={() => {
            sendGAEvent({
              event: "Outgoing Link",
              value: props.title,
            });
          }}
        >
          {props.title}
        </a>
      </b>
    </li>
  );
}
