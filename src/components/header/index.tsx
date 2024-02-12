import { FC } from "react"

import { IHeaderMenuItem } from "../header-menu-item"
import HeaderMenu from "../header-menu"

import styles from "./style.module.scss"
import { Link } from "react-router-dom"

const menuItems: IHeaderMenuItem[] = [
    {
        name: "GitHub",
        icon: "bi bi-github",
        url: "https://github.com/1Marcuth",
        target: "_blank"
    },
    {
        name: "Instagram",
        icon: "bi bi-instagram",
        url: "https://www.instagram.com/marcuth.dev",
        target: "_blank"
    }
]

const Header: FC = () => {
    return (
        <header className={styles["header"]}>
            <span className={styles["logo"]}>
                <Link to="/">Marcuth</Link>
            </span>
            <HeaderMenu items={menuItems}/>
        </header>
    )
}

export default Header