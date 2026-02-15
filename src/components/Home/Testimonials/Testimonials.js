import StarRating from '../StarRating/StarRating';
import adam from '../../../assets/adam.jpg';
import michelle from '../../../assets/michelle.jpg';
import jason from '../../../assets/jason.jpg';
import amy from '../../../assets/amy.jpg';
import clsx from 'clsx';
import styles from './testimonials.module.css';

const Testimonials = () => {
    return (
        <section className={clsx("container", styles.testimonialsSection)}>
            <h2>Testimonials</h2>
            <section className={clsx("flexRow", styles.testimonialsCards)}>
                <article className={clsx("borderRadius", "flexColumn", styles.testimonialProfile)}>
                    <section className={styles.ratingsWrapper}>
                        <h3>Rating</h3>
                        <figure className={styles.ratingstars}>
                            <StarRating />
                        </figure>
                    </section>
                    <section className={clsx("flexRow", styles.profileWrapper)}>
                        <figure className={styles.profile}>
                            <img src={adam} alt="Adam Profile" />
                        </figure>
                        <p>- Adam A.</p>
                    </section>
                    <p>
                        "The food at Little Lemon is absolutely amazing! The flavors are authentic and the presentation is beautiful. Highly recommend!"
                    </p>
                </article>
                <article className={clsx("borderRadius", "flexColumn", styles.testimonialProfile)}>
                    <section className={styles.ratingsWrapper}>
                        <h3>Rating</h3>
                        <figure>
                            <StarRating />
                        </figure>
                    </section>
                    <section className={clsx("flexRow", styles.profileWrapper)}>
                        <figure className={styles.profile}>
                            <img src={michelle} alt="Michelle T. Profile" />
                        </figure>
                        <p>- Michelle T.</p>
                    </section>
                    <p>
                        "I've been coming to Little Lemon for years and it never disappoints. The service is excellent and the food is always fresh."
                    </p>
                </article>
                <article className={clsx("borderRadius", "flexColumn", styles.testimonialProfile)}>
                    <section className={styles.ratingsWrapper}>
                        <h3>Rating</h3>
                        <figure>
                            <StarRating />
                        </figure>
                    </section>
                    <section className={clsx("flexRow", styles.profileWrapper)}>
                        <figure className={styles.profile}>
                            <img src={jason} alt="Jason R. Profile" />
                        </figure>
                        <p>- Jason R.</p>
                    </section>
                    <p>
                        "Little Lemon has become my go-to spot for Mediterranean cuisine. The staff is friendly and the atmosphere is cozy."
                    </p>
                </article>
                <article className={clsx("borderRadius", "flexColumn", styles.testimonialProfile)}>
                    <section className={styles.ratingsWrapper}>
                        <h3>Rating</h3>
                        <figure>
                            <StarRating />
                        </figure>
                    </section>
                    <section className={clsx("flexRow", styles.profileWrapper)}>
                        <figure className={styles.profile}>
                            <img src={amy} alt="Amy R. Profile" />
                        </figure>
                        <p>- Amy R.</p>
                    </section>
                    <p>
                        "The ambiance at Little Lemon is perfect for a night out. The food is delicious and the cocktails are creative. A must-visit!"
                    </p>
                </article>
            </section>
        </section>
    );
}

export default Testimonials;