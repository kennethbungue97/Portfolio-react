import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
    return (
    <section id="about" className="py-32 relative overflow-hidden">

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                            About Me
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                        From the kitchen to the code. 
                        <br />
                        <span className="font-serif italic font-normal text-white"> I build digital experiences with the same passion and precision.</span>
                    </h2>

                    <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                        <p>
                           My journey started in the kitchen, where I learned the value of discipline, 
                           teamwork, and delivering quality under pressure. 
                           Today, I apply those same principles to front-end development: 
                           every interface I build is the result of careful attention to detail, 
                           combined with solid technical skills and a keen eye for design.
                        </p>
                        <p>
                            I work with HTML, CSS, JavaScript, TypeScript, and React, Php turning ideas into responsive, accessible, and performant interfaces. 
                            Whether it's an e-commerce site with WordPress or a modern web application, 
                            my goal is always the same: blending aesthetics with functionality to deliver a smooth and engaging user experience.
                        </p>
                        <p>
                            When I'm not in front of a screen, you'll find me training in the boxing ring, 
                            playing one of my musical instruments, or experimenting with new recipes in the kitchen. 
                            Creativity and curiosity are the common thread in everything I do.
                        </p>
                    </div>
                    <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                        <p className="text-lg font-medium italic text-foreground">
                            "My mission is to build digital experiences that are not just seamless, but genuinely enjoyable — 
                            websites and applications that users find intuitive and a pleasure to interact with, 
                            and that developers can easily maintain and build upon."
                        </p>
                    </div>
                    
                </div>

                {/* Right Column - Hilights */}
                <div className="grid sm:grid-cols-2 gap-6">

                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                            {item.description}
                            </p>
                        </div>
                    ))}
                </div>
                

            </div>
        </div>

    </section>
)};