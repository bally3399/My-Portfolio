import React, { useState } from 'react';
import styles from './index.module.css'

const ServiceModal = ({ toggleTab, toggleState, index, title, description, projects }) => {
    return (
        <div className={toggleState === index ? `${styles.services__modal} ${styles.active_modal}` : styles.services__modal}>
            <div className={styles.services__modal_content}>
                <i onClick={() => toggleTab(0)} className={`uil uil-times ${styles.services__modal_close}`}></i>
                <h3 className={styles.services__modal_title}>{title}</h3>
                <p className={styles.services__modal_description}>{description}</p>

                <h4>Projects</h4>
                <ul className={styles.services__modal_projects}>
                    {projects.map((project, i) => (
                        <li key={i} className={styles.services__modal_project}>
                            <i className={`uil uil-folder ${styles.services__modal_icon}`}></i>
                            <p className={styles.services__modal_info}>
                                {project.projectName} -{" "}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ServiceContent = ({ icon, title, toggleTab, index }) => {
    return (
        <div className={styles.services__content}>
            <div>
                <i className={`uil ${icon} ${styles.services__icon}`}></i>
                <h3 className={styles.services__title}>{title}</h3>
            </div>
            <span className={styles.services__button} onClick={() => toggleTab(index)}>
                View More
                <i className={`uil uil-arrow-right ${styles.services__button_icon}`}></i>
            </span>
        </div>
    );
};

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const serviceData = [
        {
            title: "Frontend Projects",
            description: "",
            icon: "uil-browser",
            projects: [
                {
                    projectName: "Movie app",
                    githubLink: "https://github.com/bally3399/movieApp.git"
                },
                {
                    projectName: "Nexcent Landing page",
                    githubLink: "https://react1-k77c-git-main-bim-bims-projects.vercel.app/"
                },
                {
                    projectName: "Fortunae Portfolio",
                    githubLink: "https://fortunae-portfolio.vercel.app/"
                }
            ]
        },
        {
            title: "Live Fullstack Project (Deployed)",
            description: "Built a cutting-edge application designed to bridge " +
                "the gap between construction services and client satisfaction. " +
                "It leverages innovative technologies to streamline interactions, " +
                "enhance efficiency, and ensure a seamless experience for both service" +
                " providers and clients.",
            icon: "uil-layers",
            projects: [
                {
                    projectName: "Quagga",
                    githubLink: "https://quagga-inky.vercel.app/"
                }
            ]
        },
        {
            title: "Live Fullstack Project (Deployed)",
            description: 'The Hotel Management System is a full-stack application' +
                ' built with Java Spring Boot for the backend and React for the ' +
                'frontend. It streamlines hotel operations by enabling room browsing,' +
                ' booking management, and guest tracking. Spring Boot powers RESTful APIs' +
                'and integrates with MySQL via Spring Data JPA, while React delivers a ' +
                'responsive UI with dynamic room listings and booking pages',
            icon: "uil-layers",
            projects: [
                {
                    projectName: "Hotel Management Booking",
                    githubLink: "https://hotel-booking-two-sage.vercel.app/"
                }
            ]
        },
        {
            title: "Live Fullstack Project (Deployed)",
            description: 'The Admin Dashboard is a full-stack web application' +
                ' developed to demonstrate a team’s expertise in building modern, ' +
                'scalable software solutions. Designed for a Software-as-a-Service platform,' +
                ' the project features a responsive frontend built with React.js and styled ' +
                'using Material UI and Tailwind CSS, alongside a robust backend built with java (Spring boot)' +
                ' and MongoDB. Key functionalities include JWT-based user authentication with' +
                ' role-based access control',
            icon: "uil-layers",
            projects: [
                {
                    projectName: "Admin Dashboard",
                    githubLink: "https://admin-dashboard-beige-xi-12.vercel.app/"
                }
            ]
        },
        {
            title: "Backend Projects (GitHub Repos)",
            description: "Skilled in creating efficient backend systems" +
                " using Java (Spring Boot) and Python (Django). These " +
                "projects include backend applications and data structure" +
                " solutions in Java and JavaScript, focusing on performance," +
                " security, and solving real-world problems.",
            icon: "uil-database",
            projects: [
                {
                    projectName: "Event Booking App (Springboot)",
                    githubLink: "https://github.com/bally3399/EventBookingApp.git"
                },
                {
                    projectName: "Election Management System (Springboot)",
                    githubLink: "https://github.com/bally3399/ElectionManagementSystem.git"
                },
                {
                    projectName: "Todo List (Springboot)",
                    githubLink: "https://github.com/bally3399/Todo-App.git"
                },
                {
                    projectName: "Application Development Using Object-Oriented Programming (OOP) (Pyhton)",
                    githubLink: "https://github.com/bally3399/Python.git"
                },
                {
                    projectName: "Data Structures & Algorithms (JavaScript)",
                    githubLink: "https://github.com/bally3399/javaScript.git"

                },
                {
                    projectName: "Data Structures & Algorithms (Java)",
                    githubLink: "https://github.com/bally3399/Task2.git"
                },
                {
                    projectName: "Hotel Management Booking",
                    githubLink: "https://github.com/bally3399/Hotel-booking-backend.git"
                }

            ]
        }
    ];

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.section__title}>Projects</h2>
            <span className="section__subtitle">What I Have Done</span>

            <div className={styles.services__container}>
                {serviceData.map((service, index) => (
                    <React.Fragment key={index}>
                        <ServiceContent
                            icon={service.icon}
                            title={service.title}
                            toggleTab={toggleTab}
                            index={index + 1}
                        />
                        <ServiceModal
                            toggleTab={toggleTab}
                            toggleState={toggleState}
                            index={index + 1}
                            title={service.title}
                            description={service.description}
                            projects={service.projects}
                        />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
