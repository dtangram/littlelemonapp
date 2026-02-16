import { useReducer } from 'react';
import availableTimesReducer from '../../reducers/availableTimesReducer';
import { initializeTimes } from '../../consts/initializetimes';
import { UPDATE_DATE } from '../../consts/actionTypes';
import BookingForm from './BookingForm/BookingForm';
import clsx from 'clsx';
import styles from './reservations.module.css';

const Reservations = () => {
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());

    const handleDateChange = (date) => {
        dispatch({ type: UPDATE_DATE, date });
    };

    return (
        <main className={clsx("container", styles.reservationContainer)}>
            <section className='flexColumn'>
                <h1>Reservations</h1>
                <section>
                    <BookingForm
                        availableTimes={availableTimes}
                        onDateChange={handleDateChange}
                    />
                </section>
            </section>
        </main>
    );
}

export default Reservations;