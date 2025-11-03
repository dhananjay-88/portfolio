import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ask Smarty",
    description: "Built a responsive employee dashboard using HTML, CSS, JavaScript, and React, optimized for real-time UI updates and smooth navigation.",
    image: "/projects/project2.png",
    tags: ["React", "HTML", "CSS","Javascript"],
    demoUrl: "https://smarty-delta.vercel.app/",
    githubUrl: "https://github.com/dhananjay-88/smarty.git",
  },
  {
    id: 2,
    title: "Hungrys Corner ",
    description:
      "Developed a café management system using HTML, CSS, and JavaScript with secure login, digital menu, real-time cart updates, and form validation.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://hungrys-corner.vercel.app/",
    githubUrl: "https://github.com/dhananjay-88/hungrys-corner.git",
  },
  {
    id: 3,
    title: "Weather Forecasting ",
    description:
      "Built an interactive weather prediction app using Python and Streamlit, applying regression models on Pune weather data for rain prediction, 10-day forecasting, and summarized insights.",
    image: "/projects/project3.jpg",
    tags: ["Python", "visualisation", "Streamlit"],
    demoUrl: "",
    githubUrl: "https://github.com/dhananjay-88/Weather-Forecast-Project.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* --- Heading --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* --- Projects Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              {/* --- Project Image --- */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* --- Project Content --- */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Icons */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      title="View on GitHub"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- View All Button --- */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dhananjay-88"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
