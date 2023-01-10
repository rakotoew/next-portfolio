import Layout from "../../components/layout";

export default function pec() {
    return (
        <>
            <div>
                <h1>Private Encrypted Cloud</h1>
                <h2>Projet Universitaire</h2>
                <h3>Private Encrypted cloud est un service cloud sécurisé avec un cryptage bout-en-bout avec React.js pour le Front, et Nest.js pour le Back</h3>
                <h4>Réalisé en 2021-2022</h4>
                <video controls src={"/video/pec.mp4"} style={{ width: "50%", height: "auto"}}/>
                <h3>Projet réalisé sur 1 an avec une équipe de 5 personne, en méthode Agile avec des sprints d&apos;1 à 2 semaines (avec utilisation de Scrumwise pour la gestion de projet)</h3>
                <h2>Technologies utilisées :</h2>
                <h3>- React</h3>
                <h3>- Tailwind</h3>
                <h3>- Nest</h3>
            </div>
        </>
    )
}