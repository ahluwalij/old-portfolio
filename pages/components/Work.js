import Image from "next/image";
import Link from "next/link";
import sellerchain from "/public/assets/experience/sellerchain.png";
import proxyfarm from "/public/assets/experience/proxyfarm.png";

function Work() {
  return (
    <div id="work" className="w-full">
      <div className="max-w-[750px] mx-auto px-2 py-16">
        <h2 className="p-10 tracking-widest uppercase animate-pulse">
          Work Experience
        </h2>
        <hr />
        <div className="grid gap-8 md:grid-cols-2">
          {/* Work Experience */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={proxyfarm}
              width="450"
              height="300"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Proxyfarm
              </h3>
              <p className="pt-2 pb-4 text-center">Premium Proxy Provider</p>
              <Link href="/experience/proxyfarm">
                <p className="py-2 text-lg font-bold text-center text-white bg-gray-500 rounded-lg cursor-pointer">
                  More
                </p>
              </Link>
            </div>
          </div>

          {/* Work Experience */}
          <div className="relative flex items-center justify-center w-full h-auto mt-3 rounded-xl group hover:animate-pulse hover:bg-gradient-to-r from-white to-gray-100">
            <Image
              className="group-hover:opacity-10 rounded-xl"
              src={sellerchain}
              width="450"
              height="300"
              alt="/"
            />
            <div className="text-gray-500 hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">Sellerchain</h3>
              <p className="pt-2 pb-4 text-center">Amazon Solutions</p>
              <Link href="/experience/sellerchain">
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

export default Work;
