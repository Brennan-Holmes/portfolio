import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/styles.module.css';
import Typed from "react-typed";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function index() {
  return (
    <>
      <Head>
        <title>Brennan's Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>BH</div>
          <ul className={styles.navList}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <Link href="/about" className={styles.navItem}>
              About Me
            </Link>
            <Link href="/projects" className={styles.navItem}>
              Projects
            </Link>
            <Link href="/resume" className={styles.navItem}>
              Resume
            </Link>
            <Link href="/contact" className={styles.navItem}>
              Contact
            </Link>
          </ul>
        </nav>
        <div className={styles.row}>
          <p className={styles.pHome1}>
            {/* Hi, my name is Brennan, <br />I live in Halifax Nova Scotia */}
              Hi, my name is Brennan <br />
            <Typed
              strings={[
                "I live in Halifax Nova Scotia",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </p>
          <div className={styles.Pwebdev}>
            I'm a Junior Web Developer
          </div>
          <div className={styles.container1}>
            <Link href="/resume">Resume</Link>
          </div>
        </div>
      </div>
      <div className={styles.containerIcons}>
        <Link href="https://github.com/Brennan-Holmes">
          <i className="fab fa-github"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/brennan-holmes/">
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
      <footer className={styles.footer}>
        <div>Made with ❤️ by Brennan Holmes</div>
      </footer>
    </>
  );
}
