import React from "react"
import styles from "./Header.module.css"

export interface HeaderProps {
    title: string;
}


export function Header({ title }: HeaderProps) {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.leftInset}>
                </div>
            </div>
            <div className={styles.middle}>
                <div className={styles.middleTop} />
                <div className={styles.middleText}>{title}</div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightTop}>
                </div>
            </div>
        </div>
    )
}
