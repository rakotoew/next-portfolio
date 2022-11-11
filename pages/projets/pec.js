import Layout from "../../components/layout";

export default function pec() {
    return (
        <Layout>
            <div>
                <h1>Private Encrypted Cloud</h1>
                <h2>Projet Universitaire</h2>
                <h3>Private Encrypted cloud est un service cloud sécuriser avec un cryptage bout-en-bout avec React.js pour le Front, et Nest.js pour le Back</h3>
                <video controls src={"/video/pec.mp4"} style={{ width: "100%", height: "35em"}}/>
            </div>
        </Layout>
    )
}