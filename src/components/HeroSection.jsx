// import { ArrowDown } from "lucide-react"
// export const HeroSection =()=>{
//   return(
//     <section id="hero" 
//     className="relative min-h-screen flex flex-col items-center justify-center px-4">
// <div className="container max-w-4xl mx-auto text-center z-10">
// <div className="space-y-6">
// <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//     <span className="opacity-0 animate-fade-in"> Hi, I'm </span>
//      <span className="text-primary opacity-0 animate-fade-in-delay-1"> Fasika </span>
//       <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Yayeh </span>
// </h1>
// <p className="text-lg md:text-x1 text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//      I create staller web experiance with modern technology.
//     specializing in front-end devlopment,I build interface that are 
//     both beautiful and functional.
// </p>
// <div className="opacity-0 animate-fade-in-delay-4">
//     <a href="#projects" className="cosmic-button">
//         View My Project
//     </a>
//   </div>
//  </div>
// </div>
// <div className="absolute bottom-8 left-1/2 transform-translate-x-1/2 flex flex-col items-center animate-bounce ">
// <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
// <ArrowDown className="h-5 w-5 text-primary"/>
// </div>
//     </section>
//   )
// }
import { ArrowDown } from "lucide-react";
import profile from "../assets/profile.png"
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 flex items-center"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        
        {/* LEFT — TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Fasika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Yayeh
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technology.
            Specializing in front-end development, I build interfaces
            that are both beautiful and functional.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end opacity-0 animate-fade-in-delay-3">
          <div className="relative">
            <img
              src={profile}
              alt="Fasika Yayeh"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
