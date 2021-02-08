import React from "react"
import styles from "./Footer.module.css"

export interface HeaderProps {
    title: string;
}


export function Footer() {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.leftInset}>
                </div>
            </div>
            <div>
                <div className={styles.spacer} />
                <div className={styles.knob} />
            </div>
        </div>
    )
}
