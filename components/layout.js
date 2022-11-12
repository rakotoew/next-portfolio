import Head from 'next/head';
import Navbar from "./navbar";
import styles from "../styles/components/Layout.module.css"
import Footer from "./footer";
const name = 'Ewan Rakotoanosy';
export const siteTitle = 'Ewan Rakotoanosy';

export default function Layout({ children}) {
    return (<>
        <Head>
            <title>{siteTitle}</title>
            <link rel="icon" href="/favicon.png" />
            <meta property="og:title" content="Ewan Rakotoanosy Portfolio"/>
            <meta property="og:image" content="/favicon.png"/>
            <meta property="og:description" content="Ceci est le portfolio d'ewan rakotoanosy, présentant ses passions, compétences et projets."/>
            <meta property="og:url" content="https://www.rakotoew.fr"/>
        </Head>
                <div id="smallstars" className={styles.stars}></div>
                <div id="mediumstars" className={styles.stars2}></div>
                <div id="greatstars" className={styles.stars3}></div>
                <main>
                    <div className={styles.header}>
                        <h1 className="blue">Bienvenue</h1>
                        <h3>Vous naviguez sur le portfolio d&apos;Ewan Rakotoanosy</h3>
                        <Navbar/>
                    </div>
                    <div className={styles.child}>
                        {children}
                    </div>
                </main>
        <Footer/>
    </>);
}