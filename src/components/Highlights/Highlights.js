import greekSalad from '../../assets/greek salad.jpg';
import bruschetta from '../../assets/bruschetta.jpg';
import lemonDessert from '../../assets/lemon dessert.jpg';
import scooter from '../../assets/scooter.png';
import clsx from 'clsx';
import styles from './highlights.module.css';

const Highlights = () => {
    return (
        <section className={clsx("container", styles.highlightsSection)}>
            <section className={clsx("flexRow", styles.highlightsContent)}>
                <h1>This week’s specials!</h1>
                <button className={styles.reservationButton}>Online Menu</button>
            </section>
            <section className={clsx("flexRow", styles.highlightsSectionCards)}>
                <article className={styles.highlightsCard}>
                    <figure className={clsx(styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={greekSalad} alt="Greek Salad" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h2>Greek Salad</h2>
                            <span>$12.99</span>
                        </section>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={styles.highlightsCardOrderButton}>Order a delivery</button>
                            <figure className={styles.highlightsCardOrderIcon}>
                                <img src={scooter} alt="Order delivery" />
                            </figure>
                        </section>
                    </section>
                </article>
                <article className={styles.highlightsCard}>
                    <figure className={clsx(styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={bruschetta} alt="Bruschetta" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h2>Bruschetta</h2>
                            <span>$5.99</span>
                        </section>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={styles.highlightsCardOrderButton}>Order a delivery</button>
                            <figure className={styles.highlightsCardOrderIcon}>
                                <img src={scooter} alt="Order delivery" />
                            </figure>
                        </section>
                    </section>
                </article>
                <article className={styles.highlightsCard}>
                    <figure className={clsx("flexRow", styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={lemonDessert} alt="Lemon Dessert" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h2>Lemon Dessert</h2>
                            <span>$5.00</span>
                        </section>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={styles.highlightsCardOrderButton}>Order a delivery</button>
                            <figure className={styles.highlightsCardOrderIcon}>
                                <img src={scooter} alt="Order delivery" />
                            </figure>
                        </section>
                    </section>
                </article>
            </section>
        </section>
    );
}

export default Highlights;