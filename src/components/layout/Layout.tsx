import React from "react"
import {Header} from "./header/Header";
import {Content} from "./content/Content";
import {Footer} from "./footer/Footer";
import styles from "./Layout.module.css"
import { Switch, Route } from "react-router-dom";
import {MissionPage} from "../../pages/mission-page/MissionPage";
import { ExperiencePage } from "../../pages/experience-page/ExperiencePage";
import data from "../../data.json"



export function Layout() {

    const links = [{
           text: "mission",
           url: "/"
        },
        {
            text: "experience",
            url: "/experience"
        }];

    return (
        <div className={styles.container}>
            <Header title={data.name.toUpperCase()} role={data.role.toUpperCase()} />
            <Content links={links}>
                <Switch>
                    <Route path="/" exact >
                        <MissionPage />
                    </Route>
                    <Route path="/experience">
                        <ExperiencePage />
                    </Route>
                </Switch>
            </Content>
            <Footer />
        </div>)
}
