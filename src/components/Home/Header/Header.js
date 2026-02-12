import restaurantfood from '../../../assets/restaurantfood.jpg';
import clsx from 'clsx';
import styles from './header.module.css';

const Header = () => {
    return (
        <header id="header" className={clsx("container", "flexColumn", styles.headerContainer)}>
            <section className={clsx("flexColumn", styles.headerSection)}>
                <article className={clsx("flexColumn", styles.headerWrapper)}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <button className={styles.reservationButton}>Reserve a Table</button>
                </article>
                <figure className={styles.headerImage}>
                    <img className="borderRadius" src={restaurantfood} alt="Delicious Mediterranean Dish" />
                </figure>
            </section>
            <figure className={styles.headerBck}></figure>
        </header>
    );
}

export default Header;