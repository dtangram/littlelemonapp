import { useState } from "react";
import { currentPathname } from '../../../utils/currentPathname.js';
import logo from "../../../assets/logo.jpg";
import hamburgerIcon from "../../../assets/hamburgerIcon.png";
import clsx from 'clsx';
import styles from './nav.module.css';

const Nav = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const toggleMenu = () => setIsHamburgerMenuOpen(prev => !prev);
  const closeMenu = () => setIsHamburgerMenuOpen(false);
  const getCurrentLinkClass = (path) => currentPathname === path ? "currentLink" : "";

  return (
    <nav className={clsx("container", styles.navContainer)}>
      <section className={clsx("flexRow", styles.navSection)}>
        <a href="/" className={styles.logoLink}>
          <figure className={styles.logo}>
            <img src={logo} alt="Little Lemon Logo" />
          </figure>
        </a>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isHamburgerMenuOpen}
        >
          <img src={hamburgerIcon} alt="Hamburger menu icon" />
        </button>
        <ul className={clsx(styles.navLinks, styles.linkHoverEffect, { [styles.navLinksOpen]: isHamburgerMenuOpen })}>
          <li className={getCurrentLinkClass("/")}><a href="/" onClick={closeMenu}>Home</a></li>
          <li className={getCurrentLinkClass("/about")}><a href="/about" onClick={closeMenu}>About</a></li>
          <li className={getCurrentLinkClass("/menu")}><a href="/menu" onClick={closeMenu}>Menu</a></li>
          <li className={getCurrentLinkClass("/reservations")}><a href="/reservations" onClick={closeMenu}>Reservations</a></li>
          <li className={getCurrentLinkClass("/orderOnline")}><a href="/orderOnline" onClick={closeMenu}>Order&nbsp;Online</a></li>
          <li className={getCurrentLinkClass("/login")}><a href="/login" onClick={closeMenu}>Login</a></li>
        </ul>
      </section>
    </nav>
  );
};

export default Nav;