import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import {Layout} from "./components/layout/Layout";
import {BrowserRouter} from "react-router-dom";

function App()
{
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById("app"))

