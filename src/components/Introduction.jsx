import React from "react";
import Fade from "react-reveal/Fade";
import Navigation from "./Navigation";

export default function Introduction() {
    return (
        <React.Fragment>
            <Fade delay={700}>
                <Navigation />
            </Fade>
            <div className="intro">
                <div className="row">
                    <div className="col-6 col-xl-5 offset-6 offset-xl-7">
                        <Fade bottom>
                            <h1>Sannan Hafeez</h1>
                        </Fade>
                        <Fade bottom delay={400}>
                            <h2>Software Engineering Student</h2>
                        </Fade>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
