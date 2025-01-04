import React from 'react';
import styles from './index.module.css'
const Footer = () => {
    return (
       <footer className={styles.footer}>
           <div className={styles.footer__container}>

               <div className={styles.footer__social}>
                   <a href="https://www.linkedin.com/in/baliqis-sulaiman-20470b2b8/" className={styles.footer__social_link}
                      target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-linkedin"></i>
                   </a>
                   <a href="https://github.com/bally3399" className={styles.footer__social_link} target="_blank"
                      rel="noopener noreferrer">
                       <i className="fab fa-github"></i>
                   </a>
               </div>
               <span className={styles.footer__copy}>&#169; Baliqis Sulaiman. All rights reserved</span>
           </div>
       </footer>
    );
}

export default Footer;
