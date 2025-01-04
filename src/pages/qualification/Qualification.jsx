import React from "react";
import styles from './index.module.css';

const Qualification = () => {
    return (
        <section className={styles.section} id="qualifications">
            <h2 className={styles.section__title}>Qualifications</h2>
            <span className={styles.section__subtitle}>My personal journey</span>

            <div className={styles.qualification__container}>
                <div className={styles.qualification__columns}>

                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-graduation-cap"></i> Education
                        </h3>
                        <div className={styles.qualification__box}>
                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Software Engineering</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2023 - 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Diploma in Business Education</h3>
                                    <span className={styles.qualification__subtitle}>Henley Business School, UK</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>National Diploma (ND) - Animal Health
                                        and Production</h3>
                                    <span
                                        className={styles.qualification__subtitle}>Federal College of Agriculture, Akure</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> 2019 - 2022
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.qualification__content}>
                        <h3 className={styles.column__title}>
                            <i className="uil-briefcase-alt"></i> Experience
                        </h3>
                        <div className={styles.qualification__box}>
                            {/*<div className={styles.qualification__data}>*/}
                            {/*    <div>*/}
                            {/*        <h3 className={styles.qualification__title}>Fullstack Engineer</h3>*/}
                            {/*        <span className={styles.qualification__subtitle}>Oj Santos / Law & Visas</span>*/}
                            {/*        <div className={styles.qualification__calendar}>*/}
                            {/*            <i className="uil-calendar-alt"></i> Nov. 2024 - till date*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Frontend Developer (Intern)</h3>
                                    <span className={styles.qualification__subtitle}>Enum, Lagos</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Oct. – December. 2024
                                    </div>
                                </div>
                            </div>

                            <div className={styles.qualification__data}>
                                <div>
                                    <h3 className={styles.qualification__title}>Software Engineer Trainee</h3>
                                    <span className={styles.qualification__subtitle}>Semicolon Africa</span>
                                    <div className={styles.qualification__calendar}>
                                        <i className="uil-calendar-alt"></i> Oct. 2023 – Sep. 2024
                                    </div>
                                </div>
                            </div>

                            {/*<div className={styles.qualification__data}>*/}
                            {/*    <div>*/}
                            {/*        <h3 className={styles.qualification__title}>Graphics Designer</h3>*/}
                            {/*        <span className={styles.qualification__subtitle}>Avila Naturalle</span>*/}
                            {/*        <div className={styles.qualification__calendar}>*/}
                            {/*            <i className="uil-calendar-alt"></i> Feb. 2022 - Oct. 2022*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className={styles.qualification__data}>*/}
                            {/*    <div>*/}
                            {/*        <h3 className={styles.qualification__title}>Web Developer (Intern)</h3>*/}
                            {/*        <span className={styles.qualification__subtitle}>Promasidor Nigeria</span>*/}
                            {/*        <div className={styles.qualification__calendar}>*/}
                            {/*            <i className="uil-calendar-alt"></i> Mar. 2020 - Dec 2021*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className={styles.qualification__data}>*/}
                            {/*    <div>*/}
                            {/*        <h3 className={styles.qualification__title}>Senior Graphics Designer / Tutor</h3>*/}
                            {/*        <span className={styles.qualification__subtitle}>BUYIT Computers</span>*/}
                            {/*        <div className={styles.qualification__calendar}>*/}
                            {/*            <i className="uil-calendar-alt"></i> Jan. 2015 - Dec. 2019*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div className={styles.qualification__data}>*/}
                            {/*    <div>*/}
                            {/*        <h3 className={styles.qualification__title}>Computer Tutor</h3>*/}
                            {/*        <span*/}
                            {/*            className={styles.qualification__subtitle}>Fablo Computer College, Lagos</span>*/}
                            {/*        <div className={styles.qualification__calendar}>*/}
                            {/*            <i className="uil-calendar-alt"></i> June 2012 - Dec. 2014*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
