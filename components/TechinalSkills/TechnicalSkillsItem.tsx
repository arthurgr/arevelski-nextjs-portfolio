export const TechnicalSkillsItem = (props: {
  config: {
    category: string;
    items: Array<string>;
  };
}) => {
  return (
    <span className="mx-3">
        <h2 className="text-sm font-bold dark:text-gray-200">
            {props.config.category}
        </h2>
        <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
            {props.config.items.map((e) => (
                <li key={e}>{e}</li>
            ))}
        </ul>
    </span>
  );
};
