import styles from "../styles/components/Footer.module.css";
import Image from 'next/image';
import Link from "next/link";

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
        <span className={styles.content}>
            Ce site web est sous <Link href="https://github.com/rakotoew/next-portfolio/blob/main/LICENSE.md">Licence GNU GPL v3.0</Link>

        </span>
    </footer>);
}

function Imagefooter({title, alt, source}) {
    return (<Image title={title} alt={alt} src={source} width={String(width)} height={String(height)}/>)
}