import { useState } from "react";
import logo from "../../assets/logo.jpg";
import hamburgerIcon from "../../assets/hamburgerIcon.png";
import clsx from 'clsx';
import styles from './nav.module.css';
const Nav = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const toggleMenu = () => setIsHamburgerMenuOpen(prev => !prev);
  const closeMenu = () => setIsHamburgerMenuOpen(false);

  return (
    <nav className={clsx("container", styles.navContainer)}>
      <section className={clsx("flexRow", styles.navSection)}>
        <figure className={styles.logo}>
          <img src={logo} alt="Little Lemon Logo" />
        </figure>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isHamburgerMenuOpen}
        >
          <img src={hamburgerIcon} alt="Hamburger menu icon" />
        </button>
        <ul className={clsx(styles.navLinks, { [styles.navLinksOpen]: isHamburgerMenuOpen })}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#menu" onClick={closeMenu}>Menu</a></li>
          <li><a href="#reservations" onClick={closeMenu}>Reservations</a></li>
          <li><a href="#order-online" onClick={closeMenu}>Order&nbsp;Online</a></li>
          <li><a href="#login" onClick={closeMenu}>Login</a></li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;