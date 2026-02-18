import useReservationsForm from '../../../hooks/useBookingForm';
import { OCCASIONS } from '../../../consts/occasions';
import styles from './bookingForm.module.css';
import clsx from 'clsx';

const BookingForm = ({ availableTimes, onDateChange }) => {
  const {
    name,
    phone,
    date,
    time,
    occasion,
    errors,
    count,
    decrementHandler,
    handleNameChange,
    handlePhoneChange,
    handleDateChange,
    handleTimeChange,
    handleIncrement,
    handleReset,
    handleOccasionChange,
    handleSubmit
  } = useReservationsForm({ onDateChange });

  return (
    <form onSubmit={handleSubmit} className={clsx('flexColumn', styles.form)} noValidate>
      <fieldset className={clsx('flexColumn', styles.fieldset)}>
        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="e.g. Aden Johnson"
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          />
          {errors.name && (
            <span id="name-error" role="alert" className={styles.error}>{errors.name}</span>
          )}
        </section>

        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="(555) 555-5555"
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            aria-invalid={!!errors.phone}
            className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          />
          {errors.phone && (
            <span id="phone-error" role="alert" className={styles.error}>{errors.phone}</span>
          )}
        </section>
      </fieldset>

      <fieldset className={clsx('flexColumn', styles.fieldset)}>
        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="date" className={styles.label}>Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            aria-describedby={errors.date ? 'date-error' : undefined}
            aria-invalid={!!errors.date}
            className={`${styles.input} ${errors.date ? styles.inputError : ''}`}
          />
          {errors.date && (
            <span id="date-error" role="alert" className={styles.error}>{errors.date}</span>
          )}
        </section>

        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="time" className={styles.label}>Time</label>
          <select
            id="time"
            value={time}
            onChange={handleTimeChange}
            aria-describedby={errors.time ? 'time-error' : undefined}
            aria-invalid={!!errors.time}
            className={`${styles.input} ${styles.select} ${errors.time ? styles.inputError : ''}`}
          >
            <option value="" disabled>Select a time</option>
            {availableTimes.map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" role="alert" className={styles.error}>{errors.time}</span>
          )}
        </section>

        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="guestCount" className={styles.label}>Number of Guests</label>
          <input type="hidden" id="guestCount" name="guestCount" value={count} readOnly />
          <section className={clsx('flexColumn', styles.counterWrapper)}>
            <section className={clsx('flexRow', styles.counter)}>
              <button type="button" onClick={handleIncrement} aria-label="Add guest">+</button>
              <span>{count}</span>
              <button type="button" onClick={decrementHandler} aria-label="Remove guest">-</button>
            </section>
            <button type="button" onClick={handleReset} aria-label="Reset guest count">Reset</button>
          </section>
          {errors.guestCount && (
            <span id="guestCount-error" role="alert" className={styles.error}>{errors.guestCount}</span>
          )}
        </section>

        <section className={clsx('flexColumn', styles.field)}>
          <label htmlFor="occasion" className={styles.label}>Occasion</label>
          <select
            id="occasion"
            value={occasion}
            onChange={handleOccasionChange}
            aria-describedby={errors.occasion ? 'occasion-error' : undefined}
            aria-invalid={!!errors.occasion}
            className={`${styles.input} ${styles.select} ${errors.occasion ? styles.inputError : ''}`}
          >
            <option value="" disabled>Select an occasion</option>
            {OCCASIONS.map(o => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          {errors.occasion && (
            <span id="occasion-error" role="alert" className={styles.error}>{errors.occasion}</span>
          )}
        </section>
      </fieldset>

      <button type="submit">Reserve a Table</button>
    </form>
  );
};

export default BookingForm;