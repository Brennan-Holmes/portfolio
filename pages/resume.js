import styles from '../styles/styles.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function resume() {
  return (
    <>
      <Head>
        <title>Brennan's Portfolio | Resume</title>
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
      </div>
      <div className={styles.container}>
        <Link
          className={styles.downloadResume}
          href="https://drive.google.com/file/d/1Q5kGoSI1VSlMSOFKMPKz_8R7kJk49icV/view?usp=share_link"
        >
          <FontAwesomeIcon icon={faCloudArrowDown} />
          Download Resume
        </Link>
      </div>
      <footer className={styles.footer}>Made with ❤️ by Brennan Holmes</footer>
    </>
  );
}
