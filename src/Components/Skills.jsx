import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiNextdotjs, SiBootstrap, SiTailwindcss, SiCss3, SiHtml5, SiGithub, SiNetlify, SiVercel, SiPostman, SiRender, SiRailway, SiVite, SiNpm } from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {

  const techIcons = [
    { icon: <SiHtml5 />, name: 'HTML5' },
    { icon: <SiCss3 />, name: 'CSS3' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiBootstrap />, name: 'Bootstrap CSS' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' }
  ];

  const techStack = [
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiNetlify />, name: "Netlify" },
    { icon: <SiVercel />, name: "Vercel" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiRender />, name: "Render" },
    { icon: <SiRailway />, name: "Railway" },
    { icon: <SiVite />, name: "Vite" },
    { icon: <SiNpm />, name: "npm" },
  ];
  return (
    <section className="py-24 bg-linear-to-b from-crypto-blue to-[#12141C] relative overflow-hidden">
      <div className="container flex flex-wrap gap-10 mx-auto px-4 relative z-10 border-b-2 border-white/10 pb-16">
        <h1 className='w-screen text-center text-3xl md:text-4xl font-bold mb-8 text-gradient'>Tech Skills</h1>
        <div className="w-full flex flex-wrap justify-center gap-8 mt-8">
          {techIcons.map(({ icon, name }) => (
            <div
              key={name}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 w-40 h-32 flex items-center justify-center text-center text-sm font-medium hover:bg-white/10 cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl text-crypto-purple">{icon}</div>
                <div className='font-display tracking-widest'>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container flex flex-wrap gap-10 mx-auto px-4 relative z-10 py-12">
        <h1 className='w-screen text-center text-3xl md:text-4xl font-bold mb-3 text-gradient'>Tools / Build Tools I use</h1>
        <div className="w-full flex flex-wrap justify-center gap-8 mt-8">
          {techStack.map(({ icon, name }) => (
            <div
              key={name}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 w-40 h-32 flex items-center justify-center text-center text-sm font-medium hover:bg-white/10 cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl text-crypto-purple">{icon}</div>
                <div className='font-display tracking-widest'>{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;