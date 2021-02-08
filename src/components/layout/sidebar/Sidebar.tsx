import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./Sidebar.module.css"


export interface LinkProps {
    text: string;
    url: string;
}

export interface SidebarProps {
    links: LinkProps[];
}

export function Sidebar({ links }: SidebarProps) {

    const linkElements = links.map((l) => <NavLink exact key={l.url} to={l.url} className={styles.link} activeClassName={styles.active}><span>{l.text.toUpperCase()}</span></NavLink>)

    return (<div className={styles.sidebar}>
        <div className={styles.smallFill} />
        {linkElements}
        <div className={styles.fill} />
    </div>)

}
