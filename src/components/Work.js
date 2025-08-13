import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Student Course Registration Management",
      category: "FrontEnd Development",
      period: "Apr - Jun 2025",
      teamSize: "5",
      role: "Back-end",
      technologies: "ReactJS, Java Spring Boot, Design Patterns",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      description: "Web application supporting students course registration with admin/staff roles, full CRUD functions, and optimized with design patterns.",
      github: "https://github.com/FakerHecker/SE401_Group2_Project"
    },
    {
      id: 2,
      title: "Privacy-Preserving Payment System on Public Blockchains using ZKP",
      category: "Blockchain Development",
      period: "Mar - Jun 2025",
      teamSize: "3",
      role: "Back-end",
      technologies: "Vue.js, Golang, Solidity",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      description: "This privacy-focused cryptocurrency web app enables users to deposit and withdraw tokens anonymously using zero-knowledge proofs, while also ensuring regulatory compliance through integrated KYC verification. The platform supports multiple cryptocurrency wallets and provides a secure, user-friendly interface.",
      github: "https://github.com/trinhsang02/Microservice_Backend"
    },
    {
      id: 3,
      title: "Hospital Management System - ScheHealth",
      category: "FullStack Development",
      period: "Sep 2024 - Feb 2025",
      teamSize: "3",
      role: "Full-stack",
      technologies: "Rust, Next.js, Tailwind CSS",
      image: "./assets/hospital.jpg",
      description: "The hospital management system supports both staff and patients. Patients can schedule appointments and search their medical history online. Medical staff can manage patient records and appointments efficiently. The system offers role-based access and works seamlessly across devices.",
      github: "https://github.com/trinhsang02/ScheHealth"
    },
    {
      id: 4,
      title: "Learning English Application - EngPal",
      category: "Mobile Development",
      period: "Mar - Jun 2025",
      teamSize: "2",
      role: "Front-end",
      technologies: "React Native (Expo Go), Golang, SQLite",
      image: "./assets/EngPal_logo.png",
      description: "EngPal, a comprehensive mobile English learning application featuring an offline Oxford Dictionary powered by SQLite, smart flashcards for vocabulary review, story and manga reading, structured grammar lessons, and an AI chatbot for conversation practice.",
      github: "https://github.com/trinhsang02/EngPal"
    },
    {
      id: 5,
      title: "Floppy - Blockchain-Powered Flappy Bird Game",
      category: "Mobile & Blockchain Development",
      period: "Sep - Dec 2024",
      teamSize: "2",
      role: "Front-end",
      technologies: "React Native (Expo Go), Rust, Solidity",
      image: "./assets/flappy-bird-difficulty.jpg",
      description: "Floppy is a modern React Native mobile game inspired by Flappy Bird, enhanced with Web3 and blockchain functionality. This project combines classic arcade gaming with NFTs, cryptocurrency integration, and decentralized features.",
      github: "https://github.com/trinhsang02/FloppyBird"
    },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Personal Projects.
        </motion.h2>

        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A collection of personal projects showcasing my skills in mobile, web development and blockchain technologies.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                y: -15,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="project-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img src={project.image} alt={project.title} />
                <motion.div
                  className="image-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <div className="project-content">
                <div className="project-header">
                  <motion.h3
                    className="project-title"
                    whileHover={{ color: "#6366f1" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <span className="project-period">{project.period}</span>
                </div>
                <p className="project-category">{project.category}</p>

                <div className="project-details">
                  <div className="detail-row">
                    <span className="detail-item">
                      <strong>Team:</strong> {project.teamSize} | <strong>Role:</strong> {project.role}
                    </span>
                  </div>
                  <div className="detail-row">
                    <span className="tech-stack">{project.technologies}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <motion.div
                  className="project-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#6366f1",
                    color: "white"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>View on GitHub →</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
