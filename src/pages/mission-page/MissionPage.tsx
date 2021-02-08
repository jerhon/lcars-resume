import React from "react"
import data from "../../data.json"

export function MissionPage() {

    return (
        <div style={{display: 'flex', alignItems: "center", height: "100%", justifyContent: "center"}}>
            <div style={{ maxWidth: "800px", fontSize: '30px', textAlign: 'center', wordWrap: "break-word", justifySelf: "center" }}>
            {data.mission}
        </div>
        </div>)
}
