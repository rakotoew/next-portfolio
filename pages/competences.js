import Layout from "../components/layout";
import styles from "../styles/pages/comp.module.css";
import Image from 'next/image';

export default function competences () {
    const Languages = [["Python","Python logo", "/logo/logo-python.png"],
        ["JavaScript","Javascript logo","/logo/logo-javascript.png"],
        ["TypeScript","TypeScript logo","/logo/logo-typescript.png"],
        ["Java","Java logo","/logo/logo-java.png"],
        ["C","C logo","/logo/logo-c.png"],
        ["C++","C++ logo","/logo/logo-c++.svg"],
        ["Ocaml","OCaml logo","/logo/logo-ocaml.png"]]

    const Frameworks =[["Node.js","node logo","/logo/logo-node.png"],
        ["React","React logo","/logo/logo-react.svg"],
        ["Vue.js","Vue logo","/logo/logo-vue.svg"],
        ["Angular","Angular logo","/logo/logo-angular.png"],
        ["Tailwind CSS","TailwindCSS logo","/logo/logo-tailwind.png"]
    ]

    const Bdds = [["MongoDB","MongoDB logo","/logo/logo-mongodb.png"],
        ["SQL","SQL logo","/logo/logo-sql.png"],
        ["Neo4J","Neo4J logo","/logo/logo-neo4j.png"]
    ]
    return (
        <div>
            <div>
                <h1>Mes Compétences Techniques :</h1>
                <div>
                    <h2>Languages</h2>
                    <div>
                        {Languages.map((language) =>
                            {return (
                                <AfficheLogo
                                    key={language}
                                    title={language[0]}
                                    alternative={language[1]}
                                    source={language[2]}
                                />
                            );
                        })}
                    </div>
                    <h2>Frameworks</h2>
                    <div>
                        {Frameworks.map((framework) =>
                        {return (
                            <AfficheLogo
                                key={framework}
                                title={framework[0]}
                                alternative={framework[1]}
                                source={framework[2]}
                            />
                        );
                        })}
                    </div>
                    <h2>Base de Données</h2>
                    <div>
                        {Bdds.map((bdd) =>
                        {return (
                            <AfficheLogo
                                key={bdd}
                                title={bdd[0]}
                                alternative={bdd[1]}
                                source={bdd[2]}
                            />
                        );
                        })}
                    </div>
                </div>
                <h1><br/>Mes compétences alternatives :</h1>
                <div>
                    <p>- &#127468;&#127463; Anglais niveau C1</p>
                    <p>- &#128039;Utilisation quotidienne de Linux</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

function AfficheLogo({title, alternative, source}) {
    return (
        <Image class={styles.logo}
        title={title}
        alt={alternative}
        src={source}
        width="100"
        height="100"/>
    );
}