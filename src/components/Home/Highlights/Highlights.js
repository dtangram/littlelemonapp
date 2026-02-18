import { redirectTo } from '../../../utils/redirectTo';
import greekSalad from '../../../assets/greek salad.jpg';
import bruschetta from '../../../assets/bruschetta.jpg';
import lemonDessert from '../../../assets/lemon dessert.jpg';
import DeliveryBike from '../../../assets/svgs/deliveryBike';
import clsx from 'clsx';
import styles from './highlights.module.css';

const Highlights = () => {
    const handleOnlineMenuClick = () => {
        redirectTo("/orderOnline");
    };

    return (
        <section className={clsx("container", styles.highlightsSection)}>
            <section className={clsx("flexRow", styles.highlightsContent)}>
                <h2>This week’s specials!</h2>
                <button className={styles.reservationButton} onClick={handleOnlineMenuClick} aria-label='View Menu'>Online Menu</button>
            </section>
            <section className={clsx("flexRow", styles.highlightsSectionCards)}>
                <article className={clsx(styles.borderRadiusTop, styles.highlightsCard)}>
                    <figure className={clsx(styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={greekSalad} alt="Greek Salad" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h3>Greek Salad</h3>
                            <span>$12.99</span>
                        </section>
                        <p>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={clsx("flexRow", styles.highlightsCardOrderButton)} onClick={handleOnlineMenuClick} aria-label="View menu to place delivery order">
                                <span>Order a delivery</span>
                                <figure className={styles.highlightsCardOrderIcon}>
                                    <DeliveryBike />
                                </figure>
                            </button>
                        </section>
                    </section>
                </article>
                <article className={clsx(styles.borderRadiusTop, styles.highlightsCard)}>
                    <figure className={clsx(styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={bruschetta} alt="Bruschetta" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h3>Bruschetta</h3>
                            <span>$5.99</span>
                        </section>
                        <p>
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={clsx("flexRow", styles.highlightsCardOrderButton)} onClick={handleOnlineMenuClick} aria-label="View menu to place delivery order">
                                <span>Order a delivery</span>
                                <figure className={styles.highlightsCardOrderIcon}>
                                    <DeliveryBike />
                                </figure>
                            </button>
                        </section>
                    </section>
                </article>
                <article className={clsx(styles.borderRadiusTop, styles.highlightsCard)}>
                    <figure className={clsx("flexRow", styles.borderRadiusTop, styles.highlightsCardImage)}>
                        <img className={styles.borderRadiusTop} src={lemonDessert} alt="Lemon Dessert" />
                    </figure>
                    <section className={clsx("flexColumn", styles.highlightsCardContent)}>
                        <section className={clsx("flexRow", styles.highlightsCardHeader)}>
                            <h3>Lemon&nbsp;Dessert</h3>
                            <span>$5.00</span>
                        </section>
                        <p>
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </p>
                        <section className={clsx("flexRow", styles.highlightsCardOrder)}>
                            <button className={clsx("flexRow", styles.highlightsCardOrderButton)} onClick={handleOnlineMenuClick} aria-label="View menu to place delivery order">
                                <span>Order a delivery</span>
                                <figure className={styles.highlightsCardOrderIcon}>
                                    <DeliveryBike />
                                </figure>
                            </button>
                        </section>
                    </section>
                </article>
            </section>
        </section>
    );
}

export default Highlights;