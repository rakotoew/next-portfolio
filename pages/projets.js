import Layout from "../components/layout";
import Link from "next/link";
import styles from '../styles/pages/projets.module.css'

export default function projets () {
    return(
        <Layout>
            <div>
            <h1>Mes projets notables :</h1>
            <div class={styles.cardHolder}>
                <Link href="/projets/pec" >
                    <div class={styles.card}>
                        <h2>Private Encrypted Cloud</h2>
                        <span>TypeScript, React/Nest</span>
                        <p>
                            Project d&apos;un cloud avec un chiffrement bout-en-bout pour stocker et
                            partager des données de façon sécurisée
                        </p>
                    </div>
                </Link>
                <Link href="/projets/byod">
                    <div class={styles.card}>
                        <h2>BYOD</h2>
                        <span className="blue">C#, Unity</span>
                        <p>
                            Jeux sérieux réalisé avec Unity dans le but d&apos;avoir un jeux crossplatform
                        </p>
                    </div>
                </Link>
            </div>
            </div>
        </Layout>
    )
}