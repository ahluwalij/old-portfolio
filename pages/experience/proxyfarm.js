import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import proxyfarm from "/public/assets/experience/proxyfarm_banner.png";
import Head from "next/head";

const Proxyfarm = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Proxyfarm</title>
        <meta content="My page title" key="title" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={proxyfarm}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 pl-2 bg-gray-800/70">Proxyfarm</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
            During my freshman year of college, I entered the world of Web3. I developed a script to automate contract trading and realized that there was a demand for the script. I soon built a UI for the script in an Electron, React Redux environment and began an alpha period. The app was supported on both Windows and Mac, persistent and non-persisten app data, AWS S3 stored metadata, and a fully on chain authentication system involving the user to have to verify that they own an NFT to enter the application. The app was styled using Tailwind CSS and SCSS.
          </p>

          <Link href="https://www.youtube.com/watch?v=v_RfGE2vPys">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Demo
            </button>
          </Link>

          <Link href="/#work">
            <p className="mt-10 underline cursor-pointer">Back To Work Experiences</p>
          </Link>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Electron Forge
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React / React Redux
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                AWS S3
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Solidity & Ethereum Blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proxyfarm;
