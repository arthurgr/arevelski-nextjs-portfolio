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
    <ul className="lg:max-w-xl">
      <h3 className="font-bold text-gray-700 dark:text-gray-200">
        {props.config.position}
      </h3>
      <h3 className="text-sm font-bold dark:text-gray-300">
        {props.config.title}
      </h3>
      <h3 className="text-sm font-normal text-gray-500 dark:text-gray-300">
        {props.config.location}
      </h3>
      <h3 className="text-sm font-normal text-gray-500 dark:text-gray-300">
        {props.config.time}
      </h3>
      <ul className="text-sm font-light text-gray-500 dark:text-gray-400">
        {props.config.description.map((e) => <li key={e}>{e}</li>)}
      </ul>
    </ul>
  );
};
