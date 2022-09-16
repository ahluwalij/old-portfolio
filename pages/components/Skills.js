import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="w-full p-2 mt-10 lg:h-screen">
      <div className="max-w-[750px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-10 tracking-widest uppercase animate-pulse">
          Skills
        </h2>
        <hr />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/angular.png"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Angular</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/java.png"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/git.png"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full flex flex-col justify-center">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto flex">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/javascript.png?raw=true"
                  width="35px"
                  height="35px"
                />
                <Image
                  src="/assets/skills/ts.jpeg"
                  width="35px"
                  height="35px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JS/TS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/react.png?raw=true"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="
                  https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full flex flex-col justify-center">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto flex">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/html.png?raw=true"
                  width="30px"
                  height="30px"
                />
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/css.png?raw=true"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="flex flex-col items-center justify-center lg:ml-6">
                <h3>HTML/CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/scss.png"
                  width="50px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SCSS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto ">
                <Image
                  src="/assets/skills/material-ui.png"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center whitespace-nowrap lg:ml-6">
                <h3>Material UI</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/c.png"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C#</h3>
              </div>
            </div>
          </div>

          <div className="p-5 duration-200 ease-in rounded-full ">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/figma.png"
                  width="30px"
                  height="40px"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
