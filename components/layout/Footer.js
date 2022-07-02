import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles["footer-tittle"]}>
                Reach me out!
            </span>
            <div className={styles["footer-wrapper"]}>
                <div
                    className={styles["footer-text"]}
                >                    
                    <div className={styles["footer-text"]}>                        
                        hello@danhuri.com
                    </div>                    
                </div>
                <div className={styles["footer-links"]}>
                    <div
                        className={styles["logo-right"]}
                    >
                        <a
                            href="http://www.instagram.com/danhuri"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/Instagram-icon.svg"
                                alt="Instagram Logo"
                                width={23}
                                height={23}
                            />
                        </a>
                    </div>
                    <div
                        className={styles["logo-right"]}
                    >
                        <a
                            href="http://linkedin.com/in/danhuri"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/linkedin-icon.svg"
                                alt="LinkedIn Logo"
                                width={23}
                                height={23}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
