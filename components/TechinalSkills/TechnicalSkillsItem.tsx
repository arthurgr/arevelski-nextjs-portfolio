export const TechnicalSkillsItem = ({
  props,
}: {
  props: { category: string; items: Array<{ alt: string; src: string }> };
}) => {
  return (
    <span className="mx-3">
      <h2 className="text-sm font-bold dark:text-gray-200 mb-2">
        {props.category}
      </h2>
      <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
        {props.items.map((skill, index) => (
          <li key={skill.alt} className="inline-block mr-2 mb-1">
            <img alt={skill.alt} src={skill.src} />
          </li>
        ))}
      </ul>
    </span>
  );
};
