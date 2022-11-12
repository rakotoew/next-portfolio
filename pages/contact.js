import Layout from "../components/layout";
import styles from '../styles/pages/contact.module.css'

export default function contact(){
    return(<Layout>
            <div>
                <h1>Me contacter</h1>
                <h3>Vous pouvez me contacter par e-mail :  {}  ou sur discord : {}</h3>
            </div>
        </Layout>)
}