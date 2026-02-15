import ReservationsForm from './ReservationsForm/ReservationsForm';
import clsx from 'clsx';
import styles from './reservations.module.css';

const Reservations = () => {
    return (
        <main className={clsx("container", styles.reservationContainer)}>
            <section>
                <h1>Reservations</h1>
                <section>
                    <ReservationsForm />
                </section>
            </section>
        </main>
    );
}

export default Reservations;