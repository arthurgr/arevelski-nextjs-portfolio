export const TechnicalSkillsItem = ({ props }: { props: { category: string; items: Array<string> }}) => {
  return (
    <span className="mx-3">
        <h2 className="text-sm font-bold dark:text-gray-200">
            {props.category}
        </h2>
        <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
            {props.items.map((skill, index) => (
                <li key={skill}>{skill}{}</li>
            ))}
        </ul>
    </span>
  );
};
