import Image from "next/image";
import Links from "./Links/Links";

export default function Header() {
  return (
    <header
      className="flex items-center overflow-hidden lg:min-h-full  md:float-none lg:fixed relative bg-blue-700 lg:w-4/12 md:w-12/12"
    >
      <div id="top" className="py-4 relative z-10">
        <div className="inside w-fit mx-auto px-16 sm:px-24 py-12">
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
          <h2 className="mt-1 text-sm font-normal text-white">Denver, CO</h2>
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
      <span
        className="animated-bg"
      ></span>
    </header>
  );
}
