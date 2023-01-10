import styles from '../styles/pages/contact.module.css'

var mail = "rakotoanosy.ewan@gmail.com"

export default function contact(){
    return(<>
            <div className={styles.container}>
                <h2>Me contacter</h2>
                <h3>Vous pouvez me contacter par e-mail : <b>{mail}</b></h3>
            </div>
        </>)
}