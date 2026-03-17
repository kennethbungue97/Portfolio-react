const experiences = [
  {
    period: "2026 — Present",
    role: "IT Service Desk Specialist",
    company: "Major Sporting Event Organization",
    description:
      "Provided first-line technical support to staff and operations during a large-scale international event in Italy during Winter. Managed hardware and software troubleshooting, resolved access issues, and ensured smooth IT operations in a fast-paced, high-pressure environment. Collaborated with cross-functional teams to support critical event infrastructure.",
    technologies: ["IT Support", "Troubleshooting", "Active Directory", "Ticketing Systems"],
    current: true,
  },
  {
    period: "2023 — 2025",
    role: "Web Designer",
    company: "Evoluzionecommerce",
    description:
      "Designed and built e-commerce sites using WordPress and WooCommerce, focusing on responsive design and smooth user experience. Customized themes and plugins to enhance functionality and product presentation. Optimized site performance and SEO, boosting visibility and sales for clients.",
    technologies: ["WordPress", "WooCommerce", "ActiveCampaign", "SEO", "Make", "Google Analytics"],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Web Design & Development Course",
    company: "Musa Formazione",
    description:
      "Completed professional training in web design and development. Learned the fundamentals of HTML, CSS, JavaScript, and design tools — laying the foundation for a career in front-end development.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Design"],
    current: false,
  },
  {
    period: "2018 — 2022",
    role: "Chef de partie",
    company: "Starhotels Rosa Grand",
    description:
      "Managed multiple kitchen stations under pressure, ensuring precision and high-quality output within strict deadlines — skills now applied to handling complex projects and tight development timelines. Coordinated and trained junior staff, fostering teamwork and smooth workflows — experience that translates directly to collaboration and mentorship in development teams.",
    technologies: ["Team Leadership", "Time Management", "Problem Solving", "Training"],
    current: false,
  },
];

export const Experience = () => {
    return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

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

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            Every career tells a story. Mine started in a busy kitchen and led me to the world of code — where I now craft digital experiences with the same care I once put into every dish.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );};