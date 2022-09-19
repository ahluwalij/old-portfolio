import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import sellerchain from "/public/assets/experience/sellerchain.png";
import Head from "next/head";

const Sellerchain = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Sellerchain Inc</title>
        <meta content="My page title" key="title" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={sellerchain}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 pl-2 bg-gray-800/70">Sellerchain</h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p className="pt-4 pb-4">
            Working in an angular .net core application, I've had mainly
            frontend responsibilities in the effort to change Sellerchain's
            recently acquired company, Shipment Maker Pro, into a more modern,
            scalable app. This position required comfortability with working
            with .NET, Angular, Visual Studio, Git, and coding in a
            readable, scalable fashion. As for my frontend skills, I have been
            able to follow modern and desirable practices while programming at
            Sellerchain like Material UI and Mobile-First Development. In this
            position, I have shown to be very comfortable with C#, Typescript,
            Scss, Git, and working with a team of developers from different
            backgrounds to accomplish a task. After the first day, I adapted and picked up my
            responsibilities very quickly. All of the other developers at
            Sellerchain have over 5 years of experience and I was able to learn
            from them by asking questions and approaching issues with them, as
            opposed to using them. I feel that the combination of my teamwork
            with both the development team and the design team speaks a lot to
            my adaptability and flexibility as a developer.
          </p>

          <a href="https://beta.sellerchain.com/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Website
            </button>
          </a>

          <Link href="/files/sellerchain_recommendation">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Recommendation
            </button>
          </Link>

          <Link href="/#work">
            <p className="mt-10 underline cursor-pointer">
              Back To Work Experiences
            </p>
          </Link>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Tech Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Angular 14
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Material Design
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Git(Bitbucket)
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Tailwind CSS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Visual Studio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sellerchain;
