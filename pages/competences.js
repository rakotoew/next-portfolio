import Layout from "../components/layout";
import styles from "../styles/pages/comp.module.css";
import Image from 'next/image';
export default function competences () {
    return (
        <Layout>
            <div>
                <h1>Mes Compétences Techniques :</h1>
                <div>
                    <h2>Languages</h2>
                    <div>
                        <Image class={styles.logo}
                            title="Python"
                            alt="Python logo"
                            src="/logo/logo-python.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="JavaScript"
                            alt="Javascript logo"
                            src="/logo/logo-javascript.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="TypeScript"
                            alt="TypeScript logo"
                            src="/logo/logo-typescript.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="Java"
                            alt="Java logo"
                            src="/logo/logo-java.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="C"
                             alt="C logo"
                             src="/logo/logo-c.png"
                             width="125"
                             height="125"
                        />
                        <Image class={styles.logo}
                            title="C++"
                             alt="C++ logo"
                             src="/logo/logo-c++.svg"
                             width="125"
                             height="125"
                        />
                        <Image class={styles.logo}
                            title="Ocaml"
                            alt="OCaml logo"
                            src="/logo/logo-ocaml.png"
                            width="125"
                            height="125"
                        />
                    </div>
                    <h2>Frameworks</h2>
                    <div>
                        <Image class={styles.logo}
                            title="Node.js"
                            alt="node logo"
                            src="/logo/logo-node.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="React"
                            alt="React logo"
                            src="/logo/logo-react.svg"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="Vue.js"
                             alt="Vue logo"
                             src="/logo/logo-vue.svg"
                             width="125"
                             height="125"
                        />
                        <Image class={styles.logo}
                            title="Angular"
                            alt="Angular logo"
                            src="/logo/logo-angular.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                               title="Tailwind CSS"
                               alt="TailwindCSS logo"
                               src="/logo/logo-tailwind.png"
                               width="125"
                               height="125"
                        />
                    </div>
                    <h2>Base de Données</h2>
                    <div>
                        <Image class={styles.logo}
                            title="MongoDB"
                            alt="MongoDB logo"
                            src="/logo/logo-mongodb.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="SQL"
                            alt="SQL logo"
                            src="/logo/logo-sql.png"
                            width="125"
                            height="125"
                        />
                        <Image class={styles.logo}
                            title="Neo4J"
                            alt="Neo4J logo"
                            src="/logo/logo-neo4j.png"
                            width="125"
                            height="125"
                        />
                    </div>
                </div>
                <h1><br/>Mes compétences alternatives :</h1>
                <div>
                    <p>- &#127468;&#127463; Anglais niveau C1</p>
                    <p>- &#128039;Utilisation quotidienne de Linux</p>
                    <p></p>
                </div>
            </div>
        </Layout>
    )
}