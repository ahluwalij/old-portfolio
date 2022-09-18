import Image from "next/image";
import datadome from "/public/assets/projects/datadome.jpeg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

function Datadome() {
  return (
    <div className="w-full">
      <Head>
        <title>Datadome</title>
        <meta content="My page title" key="title" />
      </Head>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative ">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh]  z-10">
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={datadome}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2 bg-black/50">
              Datadome Antibot Handling / Cookie Generator
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="">Overview</h2>
          <p>
            Many sites looking for antibot solutions go to Datadome. However, by
            using a request based cookie generator, we are able to pass through
            their security and make enough requests to add products to cart.
            These sites also used another security company on their submit order
            screen called Adyen. However, there is a known Adyen key to create a
            cseInstance to bypass the adyen protection. From start to finish,
            the script is able to purchase products from DataDome protected
            sites using an entirely request based approach, making the checkout
            time just a couple seconds instead of the usual 15 - 20 you would
            usually get from a browser based approach. Captchas are handled by
            CapMonster.
          </p>
          <p className="font-bold mt-2">Site List:</p>
          <div className="flex flex-col gap-2">
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.footlocker.com
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.champssports.com
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.footaction.com
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.eastbay.com
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.kidsfootlocker.com
            </p>
            <p className="flex items-center py-2">
              <RiRadioButtonFill className="pr-1" />
              www.footlocker.ca
            </p>
          </div>
          <Link href="https://github.com/ahluwalij/Datadome-Reverse-Engineering">
            <button className="px-8 py-2 mt-4 mr-8">Code(DEFUNCT)</button>
          </Link>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-auto">Stack</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                Got
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
              <p className="flex items-center py-2">
                <RiRadioButtonFill className="pr-1" />
                CapMonster
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}

export default Datadome;
