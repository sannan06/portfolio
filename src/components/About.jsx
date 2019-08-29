import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";

export default function About() {
    return (
        <React.Fragment>
            <div
                className="container-fluid"
                style={{
                    paddingTop: "2rem",
                    backgroundColor: "#f5f5f5",
                    paddingBottom: "2rem"
                }}
            >
                <Fade>
                    <div className="row justify-content-md-center">
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                        <div className="col-md-auto">
                            <h1 className="section-heading">About Me</h1>
                        </div>
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                    </div>
                </Fade>
                <Reveal effect="fadeIn">
                    <div className="row justify-content-md-center">
                        <div className="col-md-5">
                            <p className="body-paragraph">
                                Welcome, and thanks for visiting. My name's
                                Sannan, and I'm a Part II Software Engineering
                                Student at the Univeristy of Auckland. My
                                passion is front-end design, and I've done a few
                                projects around that. That said, I'm interested
                                in all stages of software development, and what
                                I may lack in experience, I more than make up
                                for with a passion to learn and improve. I also
                                have a penchant for working on and leading
                                projects/teams, and am currently working on an
                                exciting new product aimed at students (keep an
                                eye here). Take a look below to see what I'm up
                                to, and enjoy your stay.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <button type="button" class="btn btn-outline-dark">
                                Get My CV
                            </button>
                        </div>
                    </div>
                </Reveal>
            </div>
        </React.Fragment>
    );
}
