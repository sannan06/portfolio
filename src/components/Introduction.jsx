import React from "react";
import Fade from "react-reveal/Fade";

export default function Introduction() {
    return (
        <React.Fragment>
            <div className="intro">
                <div className="row">
                    <Fade bottom>
                        <div className="col-6 col-xl-5 offset-md-6">
                            <h1>Sannan Hafeez</h1>
                            <h2>Software Engineering Student</h2>
                        </div>
                    </Fade>
                </div>
            </div>
        </React.Fragment>
    );
}
