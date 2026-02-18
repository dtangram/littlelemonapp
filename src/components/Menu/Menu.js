import Highlights from "../Home/Highlights/Highlights";
import clsx from "clsx";
import styles from "./menu.module.css";

const Menu = () => {
    return (
        <main className={clsx("container", styles.menuContainer)}>
            <Highlights />
        </main>
    );
}

export default Menu;
