import React from "react"
import data from "../../data.json"
import {Experience} from "../../components/experience/Experience";

export function ExperiencePage() {

    const experience = data.experience.map((e) => <Experience {...e} />)

    return (<div>
        {experience}
    </div>)
}
