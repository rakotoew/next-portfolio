import Head from 'next/head';
import Link from "next/link";
import styles from "../styles/Layout.module.css"
const name = 'Ewan Rakotoanosy';
export const siteTitle = 'Ewan Rakotoanosy';

export default function Layout({ children}) {
    return <div>
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id="stars" className={styles.stars}></div>
        <div id="stars2" className={styles.stars2}></div>
        <div id="stars3" className={styles.stars3}></div>
        <main>
            <div className={styles.header}>

                <h1 class="blue">Bienvenue</h1>
                <h3>Vous naviguez sur le portfolio d&apos;Ewan Rakotoanosy</h3>
                <nav class={styles.nav}>
                    <Link class={styles.Link} href="/">Home</Link>
                    <Link class={styles.Link} href="/quisuisje">Qui suis je</Link>
                    <Link class={styles.Link} href="/competences">Compétences</Link>
                    <Link class={styles.Link} href="/projets">Projets</Link>
                </nav>
            </div>
            <div>
                {children}
            </div>
        </main>

    </div>;
}