import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

function About() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === "/Datadome" || router.asPath === "/Datadome") {
      setNavBg("#1f2937");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#1F2937");
      setLinkColor("#1f2937");
    }
  }, [router]);

  function handleNav() {
    setNav(!nav);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "bg-slate-800 fixed w-full h-20 shadow-xl shadow-white ease-in duration-300  z-[100] "
          : "bg-slate-800 fixed w-full h-20 shadow-xl "
      }
    >
      <div className="flex items-center justify-between w-full h-full px-10 2xl:px-16">
        <h3
          className="text-4xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent pb-2 animate-text
            from-white via-sky-500 to-white font-lobster pointer-events-none select-none"
        >
          Jazz
        </h3>

        <div>
          <div style={{ color: `${linkColor}` }} className="hidden md:flex gap-2">
            <Button
              className="ml-10 text-sm text-white uppercase"
              variant="outlined"
              href="/"
            >
              Home
            </Button>
            <Button
              className="ml-10 text-sm text-white uppercase"
              variant="outlined"
              href="/#about"
            >
              About
            </Button>
            <Button
              className="ml-10 text-sm text-white uppercase"
              variant="outlined"
              href="/#skills"
            >
              Skills
            </Button>
            <Button
              className="ml-10 text-sm text-white uppercase"
              variant="outlined"
              href="/#projects"
            >
              Projects
            </Button>
            <Button
              className="ml-10 text-sm text-white uppercase"
              variant="outlined"
              href="/#contact"
            >
              Contact
            </Button>
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-gray-800 p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-5 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full">
            {/* <Image src={logo} width="200" height="100" alt="logo" color="white"/> */}
            <h3
          className="text-4xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent pb-2 animate-text
            from-white via-sky-500 to-white font-lobster pointer-events-none select-none"
        >
          Jazz
        </h3>

            <div
              onClick={handleNav}
              className="p-2 duration-300 ease-in rounded-full shadow-sm cursor-pointer shadow-white hover:scale-110"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="flex flex-col py-10">
            <hr></hr>
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm border-white hover:border-b"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm border-white hover:border-b"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm border-white hover:border-b"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm border-white hover:border-b"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-10 text-sm border-white hover:border-b"
                >
                  Contact
                </li>
              </Link>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
