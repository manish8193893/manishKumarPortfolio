import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-crypto-purple/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-crypto-light-purple/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="sm:w-full animate-fade-in-left sm:p-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Hi There <br/></span> I'm Manish Kumar
            </h1>
            <p className="text-lg lg:text-lg text-gray-300 mb-8 sm:text-2xl">
              I'm a passionate Full Stack Developer skilled in MERN stack.<br/>I enjoy building responsive web applications and solving problems using JavaScript.
            </p>
            <p className="text-lg lg:text-lg sm:text-2xl sm:w-full text-gray-300 mb-8">
              Let's connect and create something amazing together!
            </p>
          </div>

          <div className="lg:p-4 mt-12 lg:mt-0 animate-fade-in-right sm:w-full">
            <div className="relative  mx-auto animate-float sm:w-full sm:p-4 lg:p-12">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&h=800"
                alt="Trading platform dashboard" 
                className="rounded-xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
