import { motion, AnimatePresence } from 'framer-motion';
import styles from "../styles/components/Transition.module.css";
import {useRouter} from "next/router";

const Slide_InOut = {
    out: {
        opacity: 0,
        x: 40,
        transition: {
            duration: 0.3
        }
    },
    in: {
    opacity: 1,
        x: 0,
        transition: {
        duration: 0.3,
            delay: 0
        }
    },
    initial:{
        opacity:0 ,
        x: -40,
        transition: {
            duration: 0,
            delay: 0
        }
    }
};

const fadeBack = {
        initial: {
            opacity: 0,
            scale: 0.4
        },
        in: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6
            }
        },
        out: {
            opacity: 0,
            scale: 0.4,
            transition: {
                duration: 0.6
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
                    variants={fadeBack}
                    animate="in"
                    initial="initial"
                    exit="out"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Transition;