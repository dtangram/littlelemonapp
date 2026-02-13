import About from "../Home/About/About";
import styles from "./aboutPage.module.css";

const AboutPage = () => {
    return (
        <section className={styles.aboutPageContainer}>
            <About />
        </section>
    );
}

export default AboutPage;