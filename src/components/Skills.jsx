const Skills = () => {
    const skills = [
      { name: 'HTML5', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'React', level: 70 },
      { name: 'Git', level: 65 },
      { name: 'Responsive Design', level: 75 },
    ];
  
    return (
      <section id="skills">
        <h2>Мои навыки</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;