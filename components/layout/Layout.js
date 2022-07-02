import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import { Fragment } from "react";

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <Header />
            </header>
            <main className={styles.main}>{props.children}</main>
            <Footer />
        </Fragment>
    );
};

export default Layout;
