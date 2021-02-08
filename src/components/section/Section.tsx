import React from "react";
import styles from "./Section.module.css"

export interface SectionProps {
    title: string;
    children: JSX.Element | JSX.Element[] | string | null | undefined;
}

export function Section({ title, children }: SectionProps) {

    return (<div className={styles.container}>
        <div className={styles.containerLCol}>
            <div className={styles.header}>
                <div className={styles.headerLeft} />
                <div className={styles.headerText}>{title.toUpperCase()}</div>
                <div className={styles.headerFill} />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
        <div className={styles.containerRCol}>
            <div className={styles.RColInset} />
        </div>
    </div>)
}
