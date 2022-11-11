import styles from '../styles/pages/Home.module.css'
import Layout from "../components/layout";
import Image from 'next/image';
export default function Home() {
  return (
      <Layout>
          <div>
            <div class={styles.desc}>
                <Image
                    title="Ewan Rakotoanosy au Wicklow Moutains National Park"
                    alt="Profile Picture"
                    class={styles.profile}
                    src="/profile.png"
                    width="250"
                    height="250"
                />
                <div>
                    <h1>Ewan Rakotoanosy</h1>
                    <h2>Développeur Full Stack</h2>
                    <h3>Etudiant en Master Informatique à l&apos;Université Savoie Mont Blanc</h3>
                </div>
            </div>
          </div>
      </Layout>
  )
}
