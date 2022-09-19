import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Router from "next/router";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    Router.push("/");
    alert("Your message was sent. Thank you for contacting me!");

    emailjs.sendForm(
      "service_19mckop",
      "template_2qf2ml4",
      e.target,
      "AL4X4TAccfBeR34fy"
    );
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[750px] m-auto px-2 py-16 w-full">
        <h2 className="p-10 tracking-widest uppercase animate-pulse">
          Contact
        </h2>
        <hr />
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  width={500}
                  height={300}
                  className="rounded-xl"
                  src="https://img.freepik.com/free-vector/happy-women-sitting-talking-each-other-dialog-psychologist-tablet-flat-illustration_74855-14078.jpg?t=st=1655518257~exp=1655518857~hmac=a0300273195172e7cf2174814efede3112d07709efde352d507adddd596f4c05&w=740"
                />
              </div>
              <div></div>
              <div>
                <p className="pt-6 text-center">Get in touch!</p>
                <div className="flex gap-1 mt-4">
                  <Button
                    aria-label="Email"
                    href="mailto:jasdeep.a@outlook.com"
                  >
                    <EmailIcon />
                    <p className="text-sm ml-1 lowercase">
                      jasdeep.a@outlook.com
                    </p>
                  </Button>
                </div>
                <div className="flex gap-1 mt-4">
                  <Button href="https://twitter.com/JazaScript">
                    <TwitterIcon />
                    <p className="text-sm lowercase">@JazaScript</p>
                  </Button>
                </div>
                <div className="flex gap-1 mt-4">
                  <Button href="https://www.linkedin.com/in/jasdeep-ahluwalia/">
                    <LinkedInIcon />
                    <p className="text-sm lowercase ml-1">jasdeep-ahluwalia</p>
                  </Button>
                </div>
                <div className="flex gap-1 mt-4">
                  <Button href="https://github.com/ahluwalij">
                    <GithubIcon />
                    <p className="text-sm lowercase ml-1">ahluwalij</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmail}>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-1 text-gray-800 border-2 border-gray-200 rounded-lg"
                      type="text"
                      name="name"
                      required=""
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-1 text-gray-800 border-2 border-gray-200 rounded-lg"
                      type="text"
                      name="phone"
                      required=""
                    />
                  </div>
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-1 text-gray-800 border-2 border-gray-200 rounded-lg"
                    type="email"
                    name="email"
                    required=""
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-1 text-gray-800 border-2 border-gray-200 rounded-lg"
                    type="text"
                    name="subject"
                    required=""
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">message</label>
                  <textarea
                    className="p-3 text-gray-800 border-2 border-gray-300 rounded-lg "
                    rows="5"
                    name="message"
                    required=""
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full p-3 mt-4 text-gray-500 bg-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-3 duration-200 ease-in rounded-full shadow-sm cursor-pointer shadow-white hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="m-auto text-gray-100"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
