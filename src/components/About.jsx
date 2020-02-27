import React from "react";
import Fade from "react-reveal/Fade";

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
                    <div className="row justify-content-md-center" id="about">
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
                <Fade delay={200}>
                    <div className="row justify-content-md-center">
                        <div className="col-md-5">
                            <p className="body-paragraph">
                                Welcome, and thanks for visiting. My name's
                                Sannan, and I'm a Part III Software Engineering
                                student at the Univeristy of Auckland. My
                                passion is front-end design, and I've done a few
                                projects and internships around that. That said,
                                I'm interested in all stages of software
                                development and have a passion to learn new
                                technologies and improve existing skills. I also
                                have a penchant for working on and leading
                                projects/teams, and am working as a tech team
                                member of DEVS, the largest tertiary student
                                club for developers in NZ. Take a look below to
                                see what I'm up to, and enjoy your stay.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <button type="button" class="btn btn-outline-dark">
                                <a
                                    style={{
                                        textDecoration: "none",
                                        color: "black"
                                    }}
                                    href="https://sannanh.netlify.com/.netlify/functions/cv-download"
                                >
                                    Get My CV
                                </a>
                            </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </React.Fragment>
    );
}
