import { useFetchProjects } from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-gray-700">Loading...</h2>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 capitalize">Projects</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
      </div>
      <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map(({ id, img, url, title }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img src={img} alt={title} className="w-full h-60 object-cover" />
            <h5 className="text-lg font-medium text-gray-700 text-center py-4">
              {title}
            </h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
