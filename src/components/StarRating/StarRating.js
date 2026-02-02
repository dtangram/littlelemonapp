import starRating from '../../assets/starRating.png';
import clsx from 'clsx';
import styles from './starRating.module.css';
const StarRating = () => {
    return (
        <section className={clsx("flexRow", styles.starRating)}>
            <img src={starRating} alt="Rating Stars" />
            <img src={starRating} alt="Rating Stars" />
            <img src={starRating} alt="Rating Stars" />
            <img src={starRating} alt="Rating Stars" />
            <img src={starRating} alt="Rating Stars" />
        </section>
    );
};

export default StarRating;