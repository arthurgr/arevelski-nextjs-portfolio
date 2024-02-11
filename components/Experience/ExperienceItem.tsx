export const ExperienceItem = (props: {
  config: {
    position: string;
    title: string;
    location: string;
    time: string;
    description: Array<string>;
  };
}) => {
  return (
    <span className="mx-4">
      <h2 className="font-bold text-gray-700 dark:text-gray-200">
        {props.config.position}
      </h2>
      <h3 className="text-sm font-bold dark:text-gray-200">
        {props.config.title}
      </h3>
      <h4 className="text-sm font-normal text-gray-500 dark:text-gray-300">
        {props.config.location}
      </h4>
      <h5 className="text-sm font-normal text-gray-500 dark:text-gray-300 mb-2">
        {props.config.time}
      </h5>
      <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
        {props.config.description.map((e) => <li className="mb-1" key={e}>{e}</li>)}
      </ul>
    </span>
  );
};
