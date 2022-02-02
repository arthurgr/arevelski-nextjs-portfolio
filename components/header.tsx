import { useSpring, animated } from "react-spring";
import Image from "next/image";
import Links from "./Links/Links";

export default function Header() {
  const calc = (x: number, y: number) => [
    x - window.innerWidth / 3,
    y - window.innerHeight / 3,
  ];
  const trans1 = (x: number, y: number) =>
    `translate3d(${x / 30}px,${y / 15}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <header
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      className="flex items-center overflow-hidden lg:min-h-full  md:float-none lg:fixed relative bg-blue-700 lg:w-4/12 md:w-12/12"
    >
      <div id="top" className="py-4 relative z-10">
        <div className="inside w-fit mx-auto px-24 py-12">
          <Image
            src="/images/photo.jpg"
            height={96}
            width={96}
            alt="Photo of Arthur Revelski"
            className="rounded-full"
          />
          <h1 className="mt-1 text-xl font-medium text-white">
            Arthur Revelski
          </h1>
          <h2 className="mt-1 text-sm font-normal text-white">UI Engineer</h2>
          <h2 className="mt-1 text-sm font-normal text-white">Lakewood, CO</h2>
          <p className="my-6 text-sm font-light text-gray-200 dark:text-gray-300">
            I’m passionate about designing and developing intuitive user
            interfaces. When I&apos;m not learning about Javascript, I enjoy
            trying out new recipes, exploring the Colorado mountains, and
            staying active.
          </p>
          <div className="text-gray-200">
            <Links />
          </div>
        </div>
      </div>
      <animated.div
        className="animated-bg"
        style={{ transform: props.xy.interpolate(trans1) }}
      ></animated.div>
    </header>
  );
}
