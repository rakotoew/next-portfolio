import styles from '../styles/pages/Home.module.css'
import Layout from "../components/layout";
import Image from 'next/image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";


export default function Home() {
  return (
      <>
            <div className={styles.desc}>
                <div className={styles.part}>
                    <Image
                        title="Ewan Rakotoanosy au Wicklow Moutains National Park"
                        alt="Profile Picture"
                        className={styles.profile}
                        src="/profile.png"
                        width="250"
                        height="250"
                    />
                    <div className={styles.link}>
                        <Link href="https://github.com/rakotoew">
                            <FontAwesomeIcon className={styles.icon} icon={faGithub} />&nbsp;&nbsp;
                        </Link>
                        <Link href="https://www.linkedin.com/in/ewan-rakotoanosy-844938249/">
                            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />&nbsp;&nbsp;
                        </Link>
                        <Link href="/contact">
                            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />&nbsp;&nbsp;
                        </Link>
                    </div>
                </div>
                <div>
                    <h1>Ewan Rakotoanosy</h1>
                    <h2>Développeur Full Stack</h2>
                    <h3>Etudiant en Master Informatique à l&apos;Université Savoie Mont Blanc</h3>
                </div>
            </div>
      </>
  )
}
