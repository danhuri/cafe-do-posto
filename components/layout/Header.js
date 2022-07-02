import Link from "next/link";
import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles["desktop-nav-wrapper"]}>
            <div className={styles.logo}>
                <Link href="/">Café</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    {/* <li>
                        <Link href="/career">Career</Link>
                    </li>
                    <li>
                        <Link href="/meetup">Meetup</Link>
                    </li> */}
                </ul>
            </nav>
        </div >
    );
}

export default Header;
