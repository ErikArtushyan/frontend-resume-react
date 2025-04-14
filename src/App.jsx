import { useState } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <Header />
      <main>
        <Skills />
        <Projects />
        <Experience />
        <ContactForm />
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Junior Frontend Developer</p>
        <p>Company: To be continued...</p>
      </footer>
    </div>
  );
}

export default App;