import styles from "../styles/components/Footer.module.css";
import Image from 'next/image';

var width = 2500;
if (typeof window !== 'undefined') {
    width = window.innerWidth;

}
if (width<1920){
    width=1920;
}
var height = 100 * (2500/width);
height = Math.round(height);

export default function Footer(){
    return(<footer className={styles.foot}>
        <Imagefooter title={"footer"} alt={"footer bg"} source={"/footer-img-small.svg"}/>
        <span className={styles.content}>Ce site web est sous Licence GNU GPL 3.0</span>
    </footer>);
}

function Imagefooter({title, alt, source}) {
    return (<Image title={title} alt={alt} src={source} width={String(width)} height={String(height)}/>)
}