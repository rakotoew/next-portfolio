import Layout from "../../components/layout";

export default function byod() {
    return (
        <Layout>
            <div>
                <h1>BYOD</h1>
                <h2>Projet Universitaire</h2>
                <h3>BYOD : Bring Your Own Device est un jeu sérieux réalisé sous Unity pour le compte de Mr. Thibault Carron, enseignant-Chercheur à l&apos;USMB</h3>
                <video controls src={"/video/byod.mp4"} style={{ width: "100%", height: "35em"}}/>
            </div>
        </Layout>
    )
}