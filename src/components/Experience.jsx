import React from "react";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import adhb from "../images/adhb.jpeg";

export default function About() {
    return (
        <React.Fragment>
            <div
                className="container-fluid"
                style={{
                    paddingTop: "2rem",
                    paddingBottom: "2rem"
                }}
            >
                <Fade>
                    <div
                        className="row justify-content-md-center"
                        style={{ marginBottom: "1.5rem" }}
                    >
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                        <div className="col-md-auto">
                            <h1 className="section-heading">What I've Done</h1>
                        </div>
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                    </div>
                </Fade>
                <Fade delay={200}>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4" style={{ flex: 1 }}>
                            <img src={adhb} alt="ADHB Logo" id="adhb-logo" />
                        </div>
                        <div className="col-sm-5">
                            <h2 className="subheading">Auckland DHB</h2>
                            <h3 className="byline">
                                Software Developer Intern, Dec 2018-Feb 2019
                            </h3>
                            <p className="body-paragraph">
                                Worked in a team of 3 interns on a brand new
                                collaborative tool that we created from the
                                ground up. I worked primarily on front-end
                                development, and collaborated closely with
                                stakeholders (nurses, department heads etc) to
                                refine the product and make something that they
                                would actually use, and not see as a bother.
                                Technology Stack: React.JS front-end, ASP.NET
                                Core Web API, Azure SQL, and Azure Web App.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </React.Fragment>
    );
}
