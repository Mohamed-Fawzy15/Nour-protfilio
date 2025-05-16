import ProjectCard from "../ProjectCard/ProjectCard";
import projImg from "../../assets/header-img.svg";
export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg,
    },
  ];

  return (
    <section
      className=" container mx-auto max-w-7xl px-4 py-12 text-slate-800"
      id="projects"
    >
      <div className=" mb-8 text-center md:px-8">
        <h2 className="text-white pb-5 text-4xl font-bold md:text-5xl">
          Projects
        </h2>
        <p className="text-slate-400"> all in one solution</p>
      </div>

      <div className="mb-4 grid grid-cols-12 gap-4">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            describition={project.description}
            imgUrl={project.imgUrl}
            size={project.size}
          />
        ))}
      </div>
    </section>
  );
}
