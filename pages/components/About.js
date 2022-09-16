import Image from "next/image";
import me from "../../public/assets/me.png"

function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[750px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest uppercase animate-pulse">
            About Me
          </h2>
          <hr/>
          <h4 className="py-2 text-xl">Education</h4>
          <p className="max-w-[400px]">
            I am completing my bachelors degree in Computer Science
            at the University of Maryland - College Park.
            Growing up in New York City my whole life, it is exciting to
            travel to another state to learn my passion.
            At the moment, I have finished my Java classes and am learning C to
            understand programming at a very basic level. <br/>
            My expected graduation date is November, 2024.
          </p>
          <h4 className="py-3 text-xl">Experience</h4>
            <p className="max-w-[400px]">My study of software development has hugely improved my problem solving and analytical thinking 
              skills, as well as my enthusiasm and willigness towards accepting any challenge that can 
              enhance my knowledge in this field.
               </p>
<br/>
        </div>
        <div className="lg:pt-[200px] ">
          <Image
            className="rounded-full "
            src={me}
            alt="me"
            width={375}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
