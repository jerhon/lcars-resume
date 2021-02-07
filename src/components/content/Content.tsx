import React from "react"
import styles from "./Content.module.css"
import {Sidebar} from "../sidebar/Sidebar";

export function Content() {

    return (<div className={styles.container}>
        <div className={styles.sidebar}>
            <Sidebar />
        </div>
        <div className={styles.content}>
            some content goes here!
        </div>
    </div>)
}
