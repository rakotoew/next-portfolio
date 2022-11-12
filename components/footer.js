import styles from "../styles/components/Footer.module.css";
import Image from 'next/image';

export default function Footer(){
    return(<footer>
        <Image title="footer" alt="footer bg" src="/footer-img-small.svg" width="2500" height="100"/>
        <div class={styles.content}>
            <span>Ce site web est sous Licence GNU GPL 3.0</span>
        </div>
    </footer>);
}