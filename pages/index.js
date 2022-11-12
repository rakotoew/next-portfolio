import styles from '../styles/pages/Home.module.css'
import Layout from "../components/layout";
import Image from 'next/image';
export default function Home() {
  return (
      <Layout>
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
                    <div className={styles.}>

                    </div>
                </div>
                <div className={styles.part}>
                    <h1>Ewan Rakotoanosy</h1>
                    <h2>Développeur Full Stack</h2>
                    <h3>Etudiant en Master Informatique à l&apos;Université Savoie Mont Blanc</h3>
                </div>
            </div>
      </Layout>
  )
}
