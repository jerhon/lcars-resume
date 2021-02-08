import React from "react"
import styles from "./Experience.module.css"
import {Section} from "../section/Section";

export interface ExperienceBlockProps {
    from: string,
    to: string,
    tasks: string[],
    company: string,
    role: string
}

export function Experience({ from, to, tasks, company, role }: ExperienceBlockProps) {
    return (
        <Section title={role} >
            <div className={styles.container}>
            <div><b>{company}</b> - <i>{to}</i> - <i>{from}</i></div>
                <div className={styles.roles}>
                    <ul>
                        {tasks.map((r) => <li>{r}</li>)}
                    </ul>
                </div>
            </div>
        </Section>)
}
