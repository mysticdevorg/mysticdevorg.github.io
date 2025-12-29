import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6">
      
      {/* Background Glow Effect (Optional styling touch) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl text-center space-y-6">
        
        {/* Small Tagline */}
        <p className="text-emerald-400 font-medium tracking-widest text-sm uppercase">
          Welcome to MysticDev Org
        </p>

        {/* Big Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Digital Reality</span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          I am a Full Stack Developer focused on creating scalable, high-performance web applications. 
          Converting complex logic into clean, minimal designs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
          <a href="#projects" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-lg transition-all duration-300 transform hover:scale-105">
            View Projects
          </a>
          <a href="https://github.com/mysticdevorg" target="_blank" className="px-8 py-3 border border-slate-700 hover:border-emerald-400 hover:text-emerald-400 text-slate-300 font-medium rounded-lg transition-all duration-300">
            GitHub Profile
          </a>
        </div>

      </div>
    </main>
  );
}