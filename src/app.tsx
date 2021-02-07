import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import {Layout} from "./components/layout/Layout";

function App()
{
    return (
        <Layout />
    )
}


ReactDOM.render(<App />, document.getElementById("app"))

