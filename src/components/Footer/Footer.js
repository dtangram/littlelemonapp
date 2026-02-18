import llFooterLogo from "../../assets/llFooterLogo.png";
import clsx from "clsx";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={clsx("container", "flexRow", styles.footerContainer)}>
            <figure className={styles.logoFigure}>
                <img 
                    src={llFooterLogo}
                    alt="Little Lemon Logo"
                    className={styles.logoImage}
                />
            </figure>
            <section className={clsx("flexRow", styles.footerWrapper)}>
                <section className={styles.footerSection}>
                    <h3 className={styles.sectionHeading}>Doormat Navigation</h3>
                    <ul className={clsx("flexColumn", styles.sectionList)}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </section>
                <section className={styles.footerSection}>
                    <h3 className={styles.sectionHeading}>Contact</h3>
                    <ul className={clsx("flexColumn", styles.sectionList)}>
                        <li>Address: 123 Main St, Chicago, IL</li>
                        <li>Phone: <a href="tel:+1234567890">(123) 456-7890</a></li>
                        <li>Email: <a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
                    </ul>
                </section>
                <section className={styles.footerSection}>
                    <h3 className={styles.sectionHeading}>Social Media Links</h3>
                    <ul className={clsx("flexColumn", styles.sectionList)}>
                        <li><a href="https://www.facebook.com">Facebook</a></li>
                        <li><a href="https://www.tiktok.com">TikTok</a></li>
                        <li><a href="https://www.instagram.com">Instagram</a></li>
                    </ul>
                </section>
            </section>
        </footer>
    );
}

export default Footer;