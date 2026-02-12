import marioandAdrianA from '../../../assets/marioandAdrianA.jpg';
import marioandAdrianB from '../../../assets/marioandAdrianB.jpg';
import clsx from "clsx";
import styles from './about.module.css';
const About = () => {
    return (
        <section className={clsx("container", "flexRow", styles.aboutSection)}>
            <section className={styles.aboutContent}>
                <h2>Little Lemon</h2>
                <span>Chicago</span>
                <p>
                    At Little Lemon, we pride ourselves on delivering authentic Mediterranean flavors with a modern twist. Our family-owned restaurant has been serving the Chicago community for over a decade, offering a warm and inviting atmosphere where guests can enjoy traditional recipes made from the freshest ingredients.
                </p>
            </section>
            <section className={styles.aboutImageWrapper}>
                <figure className={clsx("borderRadius", styles.aboutImage)}>
                    <img src={marioandAdrianA} alt="Mario and Adrian" />
                </figure>
                <figure className={clsx("borderRadius", styles.aboutImage)}>
                    <img src={marioandAdrianB} alt="Mario and Adrian again" />
                </figure>
            </section>
        </section>
    );
}

export default About;