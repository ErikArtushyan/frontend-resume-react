const Experience = () => {
    return (
      <section id="experience">
        <h2>Опыт и образование</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3>Начало изучения Frontend разработке</h3>
            <p className="date">2023 - настоящее время</p>
            <p>Изучение HTML, CSS, JavaScript и React через YouTube, форумов и практические проекты.</p>
          </div>
          <div className="timeline-item">
            <h3>Пет-проекты</h3>
            <p className="date">2023 - настоящее время</p>
            <p>Создание небольших приложений для отработки навыков и изучения новых технологий.</p>
          </div>
          <div className="timeline-item">
            <h3>Техническое образование</h3>
            <p className="date">Год окончания: 2026</p>
            <p>АНПОО "Колледж ВИВТ". Информационные системы и программирование.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;