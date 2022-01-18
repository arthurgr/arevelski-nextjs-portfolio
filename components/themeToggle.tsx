export default function ThemeToggle(props: {
  config: {
    theme: string;
    setTheme: (e: string) => void;
  };
}) {
  return (
    <div className="form-check form-switch float-right">
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            onChange={() => {
              if (props.config.theme === "dark") {
                props.config.setTheme("light");
              } else {
                props.config.setTheme("dark");
              }
            }}
          />
          <div
            className={`w-14 h-8 rounded-full ${
              props.config.theme === "dark" ? "bg-gray-200 " : "bg-gray-700 "
            }`}
          ></div>
          <div className="dot absolute left-1 top-1  w-6 h-6 rounded-full transition">
            {props.config.theme === "dark" ? "🌞" : "🌝"}
          </div>
        </div>
      </label>
    </div>
  );
}
