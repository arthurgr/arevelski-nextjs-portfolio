export const TechnicalSkillsItem = (props: {
  config: {
    category: string;
    items: Array<string>;
  };
}) => {
  return (
    <div>
      <h3 className="text-sm font-bold dark:text-gray-200">
        {props.config.category}
      </h3>
      <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
        {props.config.items.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};
