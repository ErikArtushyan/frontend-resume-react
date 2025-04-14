import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "WorldwideToDo",
      description: "Приложение для организации задач и ведении записей. Подробнее: https://github.com/ErikArtushyan/WorldwideToDo",
      technologies: ["HTML", "CSS", "JS", "Node.js"],
    },
    {
      title: "Delivery Project",
      description: "Адаптивный лендинг для ресторана с меню и формой бронирования. Подробнее: https://github.com/ErikArtushyan/DeliveryProject",
      technologies: ["HTML", "CSS", "JavaScript", "Python(взаимодействие с Backend)"],
    },
    {
      title: "GitTrain",
      description: "Проект для обучения работе с Git и GitHub. Подробнее: https://github.com/ErikArtushyan/git-training",
      technologies: ["JavaScript", "Node.js", "Git"],
    },
    {
        title: "First Project",
        description: "Первый пет-проект в Frontend-разработке:) Подробнее: https://github.com/ErikArtushyan/portfolio",
        technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
      },
  ];

  return (
    <section id="projects">
      <h2>Мои проекты</h2>
      <div className="project-selector">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setActiveProject(index)}
            className={activeProject === index ? 'active' : ''}
          >
            {project.title}
          </button>
        ))}
      </div>
      <div className="project-details">
        <h3>{projects[activeProject].title}</h3>
        <p>{projects[activeProject].description}</p>
        <div className="technologies">
          <strong>Технологии:</strong>
          <ul>
            {projects[activeProject].technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;