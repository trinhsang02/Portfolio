import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const education = {
    school: "University of Information Technology (UIT)",
    degree: "Software Engineering",
    period: "Sep 2022 - Now",
    gpa: "GPA: 8.36/10",
    details: [
      "Skilled in front-end and mobile development",
      "Participated in event organization activities",
      "Foster teamwork and problem-solving skills"
    ]
  };

  const workExperience = {
    company: "",
    period: "",
    role: "",
    description: "",
    responsibilities: [
      ""
    ],
    projects: [
      ""
    ]
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience.
        </motion.h2>

        <div className="experience-content">
          {/* Education */}
          <motion.div 
            className="experience-item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="experience-icon education">
              <FaGraduationCap />
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <h3>Education</h3>
                <span className="experience-period">
                  <FaCalendarAlt /> {education.period}
                </span>
              </div>
              <h4>{education.school}</h4>
              <p className="experience-role">{education.degree}</p>
              <p className="experience-gpa">{education.gpa}</p>
              <ul className="experience-list">
                {education.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Work Experience */}
          {/* <motion.div 
            className="experience-item"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="experience-icon work">
              <FaBriefcase />
            </div>
            <div className="experience-details">
              <div className="experience-header">
                <h3>Work Experience</h3>
                <span className="experience-period">
                  <FaCalendarAlt /> {workExperience.period}
                </span>
              </div>
              <h4>{workExperience.company}</h4>
              <p className="experience-role">{workExperience.role}</p>
              <p className="experience-description">{workExperience.description}</p>
              
              <div className="responsibilities">
                <h5>Key Responsibilities:</h5>
                <ul className="experience-list">
                  {workExperience.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              <div className="internship-projects">
                <h5>Projects Involved:</h5>
                <ul className="project-list">
                  {workExperience.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
