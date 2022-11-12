import styles from "../styles/components/Navbar.module.css";
import Link from "next/link";
import {useRouter} from "next/router";

const navigationRoutes = [[""," Home "],["quisuisje", " Qui suis-je "],["competences"," Compétences "],["projets"," Projets "], ["contact", "Contact"]]

export default function Navbar() {
    const router = useRouter();
    return(
        <nav className={styles.nav}>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute[0]}`}
                        text={singleRoute[1]}
                        router={router}
                    />
                );
            })}
        </nav>
    );
}

function NavigationLink({ href, text, router }) {
    let currentRoute = router.pathname;
    return (
        <Link
              href={href} className={currentRoute === {href} ? styles.Linkactive : styles.LinknonActive}>
            {text}
        </Link>
    );
}