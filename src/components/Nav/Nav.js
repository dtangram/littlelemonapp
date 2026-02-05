import logo from "../../assets/logo.jpg";
import clsx from 'clsx';
import styles from './nav.module.css';
const Nav = () => {
  return (
    <nav className={clsx("container", styles.navContainer)}>
      <section className={clsx("flexRow", styles.navSection)}>
        <figure className={styles.logo}>
          <img src={logo} alt="Little Lemon Logo" />
        </figure>
        <ul className={clsx("flexRow", styles.navLinks)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order&nbsp;Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;