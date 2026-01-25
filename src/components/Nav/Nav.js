import Logo from "../../assets/svgs/logo";
// import clsx from 'clsx';
import styles from '../../global styles/globalStyles.css';
const Nav = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className="logo">
          <Logo />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order-online">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;