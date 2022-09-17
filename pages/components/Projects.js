import Image from "next/image";
import Link from "next/link";
import datadome from "../../public/assets/projects/datadome.jpeg";
import hash from "../../public/assets/projects/hash_banner.gif";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[750px] mx-auto px-2 py-16">
        <h2 className="p-10 tracking-widest uppercase animate-pulse">
          Projects
        </h2>
        <hr />
        <div className="grid gap-8 md:grid-cols-2">
          {/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={hash}
              width="450"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Hash Automation
              </h3>
              <p className="pt-2 pb-4 text-center">Blockchain App</p>
              <Link href="/Hash">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

          {/* project */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 shadow-xl rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={datadome}
              width="450"
              height="250"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">Datadome Bypass</h3>
              <p className="pt-2 pb-4 text-center">Got & Cookie Handling</p>
              <Link href="/Datadome">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
