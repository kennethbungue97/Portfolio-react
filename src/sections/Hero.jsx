import {Button} from '@/components/Button.jsx';
import { ArrowRight, Download, Github, Linkedin,ChevronDown } from 'lucide-react';
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Javascript",
  "TypeScript",
  "Html & CSS",
  "Php",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "Canva",
  "Adobe PS",
  "Wordpress",
  "WooCommerce",
  "Make (Integromat)",
  "ActiveCampaign",
];

export const Hero = () => {
    return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

        {/*bg*/}
        <div className="absolute inset-0 ">
            <img src="/Hero-Background.jpg" alt="Hero background image" className="w-full h-full object-cover opacity-40 "/> 
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background "/>
        </div>

        {/* white dots */}
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            
            {[...Array(30)].map((_, i) => {
                const size = Math.random() < 0.15 ? 3.5 : Math.random() < 0.4 ? 2 : 1.2;
                return (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                        width: size,
                        height: size,
                        backgroundColor: "#ffffff",
                        boxShadow: `0 0 ${size * 2}px ${size}px rgba(209, 228, 240, 0.8), 0 0 ${size * 4}px ${size * 2}px rgba(180, 210, 240, 0.3)`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift-twinkle ${(2.5 + Math.random() * 20).toFixed(2)}s ease-in-out ${(Math.random() * 2).toFixed(2)}s infinite`,
                        animationFillMode: "backwards",
                        }}
                    />
                );
            })}

        </div>

        {/* CONTENT */}

        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <div className="animate-fade-in animation-delay-100">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" /> Front-End Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-300">
                            Designing with <span className="text-primary glow-text">Purpose</span>
                            <br />
                            Developing with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                            Passion.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400">
                            Hi, I'm Kenneth Bungue. I build interfaces with ReactJS, and I learned PHP by building WordPress themes. 
                            Currently diving into TypeScript and Angular—not an expert yet, but I show up every day ready to learn.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <a href="#contact">
                            <Button size="lg"> Contact Me <ArrowRight className="w-5 h-5" /> 
                        </Button>
                        </a>

                         <a href="/CV_Kennethbungue.pdf" download="Kenneth_Bungue_CV.pdf">
                            <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                            </AnimatedBorderButton>
                        </a>
                    </div>
                    {/* SociaLinks */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow me: </span>
                        {[
                        { icon: Github, href: "#" },
                        { icon: Linkedin, href: "#" },
                        ].map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">                   
                            {<social.icon className="w-5 h-5" />}
                        </a>
                    ))}
                    </div>
                </div>    

                {/* Right Column - Img Content */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Img */}
                    <div className="relative max-w-md mx-auto">
                        <div
                            className="absolute inset-0 
                        rounded-3xl bg-gradient-to-br 
                        from-primary/30 via-transparent 
                        to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/hero-2.jpeg" alt="Kenneth Bungue" className="w-full aspect-[4/5] object-cover rounded-2xl" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">2+</div>
                                <div className="text-xs text-muted-foreground">
                                Years Exp.
                                </div>
                            </div>                            
                        </div>
                    </div>                    
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologies I work with
                </p>
                <div className="relative overflow-hidden">
                    <div
                    className="absolute left-0 top-0 bottom-0 w-32
                    bg-gradient-to-r from-background to-transparent z-10"
                    />
                    <div
                    className="absolute right-0 top-0 bottom-0 w-32
                    bg-gradient-to-l from-background to-transparent z-10"
                    />
                    <div className="flex animate-marquee">
                    {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                        <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                            {skill}
                        </span>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>       
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800" >
        <a href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
    );
};