import React from 'react';

const About = () => {
  return (
    <section id="features" className="pt-24 pb-12 bg-linear-to-b about-section-gradient">
      <div className="container mx-auto px-4 border-b-2 border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">
            Know Who I Am ?
          </h2>
          <p className="w-3/4 text-lg text-gray-300 mb-8 text-justify mx-auto">
            Hi, I’m <span className="text-gradient">Manish Kumar</span>, a passionate <span className="text-gradient">MERN Stack Developer</span> with a strong interest in building scalable and user-friendly web applications.<br /><br />

            I completed my <span className="text-gradient">Bachelor of Computer Applications</span> (BCA) in 2024 and Recently, I completed my MERN Full Stack Development Course. Alongside that, I’m enhancing my <span className="text-gradient">Data Structures and Algorithms</span> skills in JavaScript to improve my problem-solving and coding efficiency. <br /><br />

            I’ve built several hands-on projects, including an <span className="text-gradient">Expense Tracker</span> App with secure <span className="text-gradient">JWT-based authentication</span>, and a <span className="text-gradient">Full-featured E-commerce platform</span> using <span className="text-gradient">Redux</span> for state management, a <span className="text-gradient">Rich Text Editor</span> for dynamic product descriptions, and the <span className="text-gradient">DataTables</span> library for efficient data representation with <span className="text-gradient">search</span>, <span className="text-gradient">pagination</span>, and <span className="text-gradient">filtering</span>.<br /><br />

            I love learning new technologies, debugging complex problems, and writing clean, maintainable code. My goal is to become a <span className="text-gradient">proficient Full Stack Developer</span> who builds impactful digital solutions and grows with every challenge.
          </p>
          <p className="pl-4 italic text-purple-500 max-w-2xl mx-auto text-lg">
            “I build secure and scalable web applications that turn ideas into impact.”
          </p>
        </div>
        <div className="w-3/4 mb-16 mx-auto font-display">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient">Education</h2>
          <div className="mb-8 relative border-l-2 border-slate-800 pl-6">
            <h4 className="text-base font-medium uppercase">Bachelor of Computer Applications</h4>
            <p className="text-base text-teal-600 mt-1">2021 - 2024</p>
            <p className="text-base italic text-gray-500">IIMT College of Management | Greater Noida</p>
            <p className="mt-2 text-base text-gray-600">Completed BCA in 2024 with a focus on computer programming, problem solving, and web development. Gained practical experience in JavaScript, data structures, and full stack web technologies, forming a strong base for my MERN development journey.</p>
          </div>

          <div className="mb-8 relative border-l-2 border-slate-800 pl-6">
            <h4 className="text-base font-medium uppercase">Higher Secondary Education &nbsp;&nbsp;|&nbsp;&nbsp;12<sup>th</sup>&nbsp;&nbsp;|&nbsp;&nbsp;PCM</h4>
            <p className="text-base text-teal-600 mt-1">2019 - 2020</p>
            <p className="text-base italic text-gray-500">GYAN INTL SCHOOL | PALLA GREATER NOIDA </p>
            <p className="mt-2 text-base text-gray-600">Completed my Higher Secondary Education (10+2) in 2020 with Physics, Chemistry, and Mathematics as core subjects. This phase helped me build a strong foundation in logic, critical thinking, and quantitative analysis — essential skills that later guided my interest in computer applications and programming.</p>
          </div>

          <div className="mb-8 relative border-l-2 border-slate-800 pl-6">
            <h4 className="text-base font-medium uppercase">MERN FULL STACK DEVELOPMENT COURSE</h4>
            <p className="text-base text-teal-600 mt-1">2024 - Present</p>
            <p className="text-base italic text-gray-500">Ducat India, Noida</p>
            <p className="mt-2 text-base text-gray-600">Completed an intensive MERN Stack Development program focused on building scalable web applications using MongoDB, Express.js, React.js, and Node.js. Gained hands-on experience in JWT authentication, Redux state management, RESTful APIs, and full-stack project deployment.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
