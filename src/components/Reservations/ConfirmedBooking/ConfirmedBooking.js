import { useLocation } from 'react-router-dom';
import CircleCheckMark from "../../../assets/svgs/circleCheckMark";
import clsx from "clsx";
import styles from "./confirmedBooking.module.css";

const ConfirmedBooking = () => {
  const location = useLocation();
  const reservationData = location.state?.reservationData;
  const { name, date, time, guestCount } = reservationData || {};

  return (
    <main className={clsx("container", "flexColumn", styles.confirmationContainer)}>
        <section className={clsx("flexColumn", styles.confirmationSection)}>
          <h1>Reservation Confirmed!</h1>
          <CircleCheckMark />
          <p>Thank you for your reservation, {name}.<br />We look forward to serving your party of {guestCount} on {date} at {time}.</p>
        </section>
    </main>
  );
}

export default ConfirmedBooking;