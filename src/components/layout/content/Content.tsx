import React from "react"
import styles from "./Content.module.css"
import {Sidebar, SidebarProps} from "../sidebar/Sidebar";

export interface ContentProps extends SidebarProps
{
    children?: JSX.Element | JSX.Element[] | null;
}

export function Content({ links, children }: ContentProps) {


    return (<div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar links={links} />
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </div>)
}
