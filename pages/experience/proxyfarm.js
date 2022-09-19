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
            Proxyfarm is a proxy company I started my senior year of high
            school. Every line of code behind Proxyfarm was written by me, and
            through this journey, I found my true love for development. In the
            technical side of the business, I learned how to configure linux
            servers with Squid, write shell scripts, use iptables for IP/network
            configuration, port IPs over different ASNs, create a custom
            storefront using React Redux with Stripe, and use Oauth2 and MongoDB
            for customer accounts. Other than the technical skills required for
            this role, I had to manage an employee doing customer support in our
            company discord, reach out to other companies for partnerships,
            manage the companies finances, and lastly, make deals with IP
            providers around the world to lease their IPs under Proxyfarm.
          </p>

          <a href="https://proxy-farm.com/" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              Website
            </button>
          </a>

          <a href="https://twitter.com/proxyfarm" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-gray-500 duration-150 ease-in-out hover:scale-105">
              User Success
            </button>
          </a>

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
                Squid Proxy
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                HTML/SCSS/JS
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                React Redux
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Express.js
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Stripe
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                IPtables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proxyfarm;
