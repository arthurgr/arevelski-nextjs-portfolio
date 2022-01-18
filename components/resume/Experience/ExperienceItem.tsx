export const ExperienceItem = (props: {
  config: {
    position: string;
    title: string;
    location: string;
    time: string;
    description: string;
  };
}) => {
  return (
    <li>
      <h3 className="mt-6 font-bold text-gray-700 dark:text-gray-200">
        {props.config.position}
      </h3>
      <h3 className="text-sm font-bold dark:text-gray-300">
        {props.config.title}
      </h3>
      <h3 className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-300">
        {props.config.location}
      </h3>
      <h3 className="text-sm font-normal text-gray-500 dark:text-gray-300">
        {props.config.time}
      </h3>
      <p className="text-sm font-light text-gray-500 mt-1 dark:text-gray-400">
        {props.config.description}
      </p>
    </li>
  );
};
