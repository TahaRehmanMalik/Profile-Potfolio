import Link from "next/link";
import Navbar from "./components/Navbar";
import{FiGithub,FiLinkedin} from 'react-icons/fi'
import Image from "next/image";
import Experience from "./components/Experience";

export default function Home() {
  return (
   <div className="min-h-screen w-full bg-white text-black ">
   <Navbar/>
   <section className=" hidden md:flex w-[5%] mt-96 h-full fixed flex-col items-center bg-white">
   {/* icons */}
   <div className=" flex flex-col justify-end gap-5 cursor-pointer ">
   <Link href="https://github.com/TahaRehmanMalik"><FiGithub className="text-2xl"/></Link>
   <Link href="https://www.linkedin.com/in/taha-rehman-061131249/"><FiLinkedin className="text-2xl"/></Link>
   </div>
   </section>
   <div className="flex flex-col w-full  px-4 pt-20 pb-20 gap-4 mt-20 mx-auto md:w-3/4 md:px-10 md:pt-40 md:pb-45 bg-white text-black ">
     <p className="text-cyan-500  text-lg mt-8 md:mt-11 md:text-xl ">Hi,I am</p>
     <h3 className="text-4xl md:text-8xl text-gray-500">Taha Rehman</h3>
     <h4 className="text-lg md:text-xl text-gray-500">A Software Engineer</h4>
     <p className="w-full md:w-3/4 text-gray-500">A passionate software engineer with a keen interest in Frontend and Backend Engineering. 
      As a full-stack engineer, I specialize in building scalable web applications and platforms 
      with a strong focus on system design, automation, and large-scale distributed systems.</p>
     <div>
     <button className="rounded-lg px-3 py-2 border border-cyan-500 text-gray-500"><Link href="mailto:rehmantaha588@gmail.com">Get In Touch</Link> </button>
     </div>
   </div>
   {/* about */}
   <section id="about" className="flex flex-col w-full mx-auto px-4 gap-4 pt-44 pb-20 md:w-3/4 bg-white text-black">
    <h3 className="text-lg md:text-2xl text-gray-500"><span className="text-cyan-500">01.</span>About</h3>
    <div className="flex flex-col md:flex-row w-full gap-8">
      <div className="w-full md:w-11/12">
      <p>Hello! I am Taha, a software engineer based in Lahore, PK.
I specialize in building large-scale web applications with a focus on responsive UI , scalability, and optimization. My expertise includes full-stack development using technologies like React.js, Next.js, Node.js, and Express.js.
I am a graduate of the University of Lahore with a Bachelor of Science in Computer Science. I have worked with engineering, development, and research teams across various companies, contributing to meaningful and impactful projects.
Here are a few technologies I have been working with recently:</p>
    <div className="grid grid-cols-2 gap-2 mt-6">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">JavaScript (JS)</p>
        </div>
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">TypeScript</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">React.js</p>
        </div>
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">Next.js</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">Node.js</p>
        </div>
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">Express.js</p>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">MongoDB</p>
        </div>
        <div className="flex items-center">
         <span className="text-cyan-500">▹</span>
         <p className="ml-2">Firebase</p>
        </div>
      </div>
    </div>
      </div>
      <div className="w-full md:w-3/4">
        <Image src="/photo.png" alt="photo" width={300} height={144} className=" object-cover rounded-lg"/>
      </div>
    </div>
   </section>
{/* Experience */}
<Experience/>
{/* contact */}
   <section id="contact" className="flex flex-col  w-full mx-auto gap-4 px-4 pt-44 pb-20 md:w-3/4 bg-white text-black">
   <h3 className="text-lg md:text-2xl flex justify-center items-center text-gray-500"><span className="text-cyan-500">03.</span>What is next</h3>
     <p className="pt-2 text-5xl flex justify-center items-center">Get In Touch</p>
     <p className="w-full md:w-2/5 mx-auto items-center text-gray-500" >Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
    <div className="flex justify-center">
     <button className="border border-cyan-500 p-2 w-max rounded-md text-gray-500"><Link href="mailto:rehmantaha588@gmail.com">Say Hello</Link></button>
    </div>
   </section>
   </div>
  );
}
