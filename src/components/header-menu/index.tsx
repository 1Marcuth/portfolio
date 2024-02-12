import { FC } from "react"

import HeaderMenuItem, { IHeaderMenuItem } from "../header-menu-item"

import styles from "./style.module.scss"

interface IProps {
    items: IHeaderMenuItem[]
}

const HeaderMenu: FC<IProps> = ({ items }) => {
    return (
        <ul className={styles["header-menu"]}>
            {items.map((item, index) => (
                <HeaderMenuItem
                    name={item.name}
                    url={item.url}
                    icon={item.icon}
                    target={item.target}
                    key={index}
                />
            ))}
        </ul>
    )
}

export default HeaderMenu