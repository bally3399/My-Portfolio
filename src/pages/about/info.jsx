import React from "react";
import styles from "./index.module.css";

const Info = () => {
    return (
        <div className={styles.about__info}>
            <div className={styles.about__box}>
                <i className={`bx bx-award ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Technical Experience</h3>
                <span className={styles.about__subtitle}>2 years of experience</span>
            </div>

            <div className={styles.about__box}>
                <i className={`bx bx-code-alt ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Coding Experience</h3>
                <span className={styles.about__subtitle}>2 Year of Hands-on Training</span>
            </div>

            {/*<div className={styles.about__box}>*/}
            {/*    <i className={`bx bx-briefcase-alt ${styles.about__icon}`}></i>*/}
            {/*    <h3 className={styles.about__title}>Projects</h3>*/}
            {/*    <span className={styles.about__subtitle}>Over 8+ Completed Projects</span>*/}
            {/*</div>*/}

            <div className={styles.about__box}>
                <i className={`bx bx-support ${styles.about__icon}`}></i>
                <h3 className={styles.about__title}>Support</h3>
                <span className={styles.about__subtitle}>Available for New Opportunities</span>
            </div>
        </div>
    );
}

export default Info;
