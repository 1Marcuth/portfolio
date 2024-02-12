import { FC } from "react"
import { Link } from "react-router-dom"

import styles from "./style.module.scss"

export interface IHeaderMenuItem {
    name: string
    url: string
    icon: string
    target?: string
}

const HeaderMenuItem: FC<IHeaderMenuItem> = ({ name, url, icon, target }) => {
    return (
        <li className={styles["header-menu-item"]}>
            <Link
                to={url}
                target={target ? target : "_self"}
            >
                <i className={icon}/>
                {name}
            </Link>
        </li>
    )
}

export default HeaderMenuItem