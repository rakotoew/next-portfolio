import { motion, AnimatePresence } from 'framer-motion';
import styles from "../styles/components/Transition.module.css";
import {useRouter} from "next/router";

const variants = {
    out: {
        opacity: 0,
        x: 40,
        transition: {
            duration: 0.5
        }
    },
    in: {
    opacity: 1,
        x: 0,
        transition: {
        duration: 0.5,
            delay: 0
        }
    },
    top:{
        opacity:0 ,
        x: -40,
        transition: {
            duration: 0.5,
            delay: 0
        }
    }
};



const Transition = ({ children }) => {
    const { asPath } = useRouter();
    return (
        <div className={styles.effect1}>
            <AnimatePresence
                initial={false}
                exitBeforeEnter
            >
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate="in"
                    initial="top"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;