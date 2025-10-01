import React from "react";
import "./CV.css";

interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string[];
}

interface Project {
  title: string;
  description: string[];
}

interface CVData {
  name: string;
  contact: ContactInfo;
  profile: string;
  technicalSkills: Record<string, string>;
  relevantCoursework: Record<string, string>;
  languages: Record<string, string>;
  coreValues: Record<string, string>;
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

const cvData: CVData = {
  name: "Mathis Fajeau",
  contact: {
    phone: "+33 7 60 09 62 71",
    email: "fajeaumathis8@gmail.com",
    linkedin: "linkedin.com/in/mathis-f-210793259/",
    github: "github.com/ZWhimsi",
  },
  profile:
    "Software Engineer with dual Master's degrees in Computer Science and Engineering, specializing in AI-powered applications and modern web development. Passionate about building intelligent, scalable systems that empower users. Strong foundation in full-stack development with React/TypeScript, Python, and C++. Proven track record delivering production-ready ML solutions with operational excellence.",
  technicalSkills: {
    Languages: "JavaScript, TypeScript, Python, C++, C#, Java, C",
    Frontend: "React, TypeScript, Modern Web Dev, Responsive Design",
    "AI/ML": "PyTorch, TensorFlow, LLMs, Agent Systems, MLOps, NLP",
    Backend: "REST APIs, Scalable Architecture, Microservices",
    DevOps: "CI/CD, Docker, Git, Testing Frameworks, Observability",
    "Cloud & Tools": "Linux, CUDA, Pandas, NumPy",
  },
  relevantCoursework: {
    "AI/CS (Georgia Tech)":
      "Large Language Models, AI for Robotics, Big Data Systems, Graduate Algorithms, GPU Programming",
    "Software Engineering":
      "Full-Stack Development, Embedded Systems, Parallel Computing, Scientific Computing",
  },
  languages: {
    French: "Native",
    English: "Professional (C1)",
    Spanish: "Conversational",
  },
  coreValues: {
    "Growth Mindset":
      "Continuously learning new technologies and methodologies",
    "Customer Obsession": "Building solutions that deliver real user value",
    Collaboration: "Thriving in cross-functional, diverse teams",
    Quality: "Writing clean, maintainable, well-tested code",
  },
  experience: [
    {
      title: "Machine Learning Engineer Intern",
      company: "Airbus",
      location: "Marignane, France",
      period: "Feb 2025 -- Aug 2025",
      achievements: [
        "Designed and deployed an end-to-end MLOps pipeline for fine-tuning open LLMs for obsolescence forecasting, reducing manual analysis by 10x",
        "Built scalable ML models for production bottleneck prediction, improving supply-chain visibility and operational efficiency",
        "Implemented CI/CD pipelines for model deployment with comprehensive testing and monitoring",
        "Applied best practices for code quality, maintainability, and security across the full development lifecycle",
      ],
    },
    {
      title: "Software Engineer Intern, Deep Learning R&D",
      company: "Thales",
      location: "Paris, France",
      period: "Apr 2024 -- Jul 2024",
      achievements: [
        "Optimized deep neural networks for embedded systems, reducing latency and energy consumption while maintaining accuracy",
        "Benchmarked acceleration techniques and developed testing frameworks to ensure reliability in production environments",
        "Collaborated with cross-functional teams to deliver high-quality, scalable solutions",
      ],
    },
    {
      title: "Teaching Assistant (MATH 2552)",
      company: "Georgia Institute of Technology",
      location: "Metz, France",
      period: "Aug 2024 -- Mar 2025",
      achievements: [
        "Mentored 30+ students in advanced mathematics, demonstrating strong communication and teaching skills",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science ",
      institution: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      period: "Expected Dec 2025",
      details: [
        "Specialization: AI/ML systems, large-scale distributed systems, and high-performance computing",
      ],
    },
    {
      degree: "Master of Engineering (Diplôme d'Ingénieur)",
      institution: "IMT Atlantique",
      location: "Brest, France",
      period: "Expected Dec 2025",
      details: [
        'Selective "Parcours Recherche" (Research Track) - Specialization: Embedded Systems & Modern Software Engineering',
      ],
    },
  ],
  projects: [
    {
      title: "AI-Powered Web Application with React & TypeScript",
      description: [
        "Built full-stack web application using React and TypeScript for interactive AI agent demonstrations",
        "Implemented modern UI/UX patterns with responsive design and accessibility best practices",
        "Integrated backend APIs with proper error handling, testing, and observability",
        "Deployed with CI/CD pipeline including automated testing and monitoring",
      ],
    },
    {
      title: "LLM Fine-Tuning & Agent Development",
      description: [
        "Fine-tuned Mistral-7B on domain-specific data, achieving significant performance improvements",
        "Developed multi-agent systems with autonomous decision-making capabilities",
        "Applied diagnosability and reliability principles to ensure production-ready quality",
      ],
    },
    {
      title: "Agent-Based Simulation with Reinforcement Learning",
      description: [
        "Developed multi-agent simulation system where behaviors evolved through RL",
        "Implemented scalable architecture to handle complex system dynamics",
        "Delivered clean, well-tested, maintainable code with comprehensive documentation",
      ],
    },
    {
      title: "Full-Stack Development with CI/CD Best Practices",
      description: [
        "Built and deployed modern web applications using JavaScript/TypeScript with automated testing",
        "Implemented observability and monitoring solutions for production reliability",
        "Applied engineering excellence: code reviews, testing, security scanning, and iterative deployment",
      ],
    },
  ],
};

const CV: React.FC = () => {
  return (
    <div className="cv-container">
      <div className="cv-sidebar">
        <div className="cv-header">
          <h1 className="cv-name">
            {cvData.name.split(" ")[0]}
            <br />
            {cvData.name.split(" ")[1]}
          </h1>
        </div>

        <section className="cv-section">
          <h2>Contact</h2>
          <div className="contact-info">
            <p>
              <i className="icon-phone"></i> {cvData.contact.phone}
            </p>
            <p>
              <i className="icon-email"></i>{" "}
              <a href={`mailto:${cvData.contact.email}`}>
                {cvData.contact.email}
              </a>
            </p>
            <p>
              <i className="icon-linkedin"></i>{" "}
              <a
                href={`https://${cvData.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData.contact.linkedin}
              </a>
            </p>
            <p>
              <i className="icon-github"></i>{" "}
              <a
                href={`https://${cvData.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cvData.contact.github}
              </a>
            </p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Profile</h2>
          <p className="profile-text">{cvData.profile}</p>
        </section>

        <section className="cv-section">
          <h2>Technical Skills</h2>
          <ul className="skills-list">
            {Object.entries(cvData.technicalSkills).map(
              ([category, skills]) => (
                <li key={category}>
                  <strong>{category}:</strong> {skills}
                </li>
              )
            )}
          </ul>
        </section>

        <section className="cv-section">
          <h2>Relevant Coursework</h2>
          <ul className="coursework-list">
            {Object.entries(cvData.relevantCoursework).map(
              ([category, courses]) => (
                <li key={category}>
                  <strong>{category}:</strong> {courses}
                </li>
              )
            )}
          </ul>
        </section>

        <section className="cv-section">
          <h2>Languages</h2>
          <ul className="languages-list">
            {Object.entries(cvData.languages).map(([lang, level]) => (
              <li key={lang}>
                <strong>{lang}:</strong> {level}
              </li>
            ))}
          </ul>
        </section>

        <section className="cv-section">
          <h2>Core Values</h2>
          <ul className="values-list">
            {Object.entries(cvData.coreValues).map(([value, description]) => (
              <li key={value}>
                <strong>{value}:</strong> {description}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="cv-main">
        <section className="cv-section-main">
          <h2>Experience</h2>
          {cvData.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="experience-meta">
                  <p className="location">{exp.location}</p>
                  <p className="period">{exp.period}</p>
                </div>
              </div>
              <ul className="achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section-main">
          <h2>Education</h2>
          {cvData.education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div>
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                </div>
                <div className="education-meta">
                  <p className="location">{edu.location}</p>
                  <p className="period">{edu.period}</p>
                </div>
              </div>
              <ul className="details">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-section-main">
          <h2>Projects</h2>
          {cvData.projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <ul className="project-description">
                {project.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CV;
