import Layout from "../../components/layout";

export default function byod() {
    return (
        <Layout>
            <div>
                <h1>BYOD</h1>
                <h2>Projet Universitaire</h2>
                <h3>BYOD : Bring Your Own Device est un jeu sérieux réalisé sous Unity pour le compte de Mr. Thibault Carron, enseignant-Chercheur à l&apos;USMB</h3>
                <h4>Réalisé en 2020-2021</h4>
                <video controls src={"/video/byod.mp4"} style={{ width: "100%", height: "auto"}}/>
                <h3>Projet réalisé sur 6 mois avec une équipe de 5 personnes, en méthode Agile avec des sprints de 2 à 3 semaines (avec une utilisation de Trello pour la gestion de projet)</h3>
                <h2>Technologies utilisées :</h2>
                <h3>- Unity</h3>
            </div>
        </Layout>
    )
}