import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";
import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
export const Home= () => {
return<div className="min-h-screen bg-background text-foreground  overflow-x-hidden">
{/* theme Toggle */}
<ThemeToggle/>
{/* Background effect */}
<StarBackground/>
{/* navBar */}
<Navbar/>
{/* Main comeponent */} 
<main>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectSection/>
    <ContactSection/>
</main>
{/* footer page */}
<Footer/>
</div>
};