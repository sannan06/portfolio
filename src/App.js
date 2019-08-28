import React from "react";
import "./App.scss";
import "./animate.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
    // TODO: do a mobile check at some point
    // const [isMobile, setMobile] = useState(false);
    return (
        <React.Fragment>
            <div className="intro-container">
                <Introduction />
            </div>
            <About />
            <Experience />
            <Projects />
        </React.Fragment>
    );
}

export default App;
