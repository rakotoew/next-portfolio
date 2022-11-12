import Layout from "../components/layout";
import styles from '../styles/pages/contact.module.css'

var mail = "e-mail"
var discord = "discord"

export default function contact(){
    return(<Layout>
            <div className={styles.container}>
                <h2>Me contacter</h2>
                <h3>Vous pouvez me contacter par e-mail : <b>{mail}</b>  ou sur discord : <b>{discord}</b></h3>
            </div>
        </Layout>)
}