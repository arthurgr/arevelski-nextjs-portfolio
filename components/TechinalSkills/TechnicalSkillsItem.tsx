export const TechnicalSkillsItem = ({ props }: { props: { category: string; items: Array<string> }}) => {
  return (
    <span className="mx-3">
        <h2 className="text-sm font-bold dark:text-gray-200">
            {props.category}
        </h2>
        <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
            {props.items.map((skill, index) => (
                <li key={skill} className="inline-block mr-2 mb-1">{skill}{props.items.length > index + 1  ? "," : "."}</li>
            ))}
        </ul>
    </span>
  );
};
