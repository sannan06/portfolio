import React from "react";
import "./App.scss";
import Introduction from "./components/Introduction";

function App() {
    return (
        <React.Fragment>
            <div className="intro-container">
                <Introduction />
            </div>
        </React.Fragment>
    );
}

export default App;
