import React from "react";
import Fade from "react-reveal/Fade";
import adhb from "../images/adhb.jpeg";
import gentrack from "../images/gentrack.jpeg";

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
                        id="experience"
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
                        <div className="col-sm-4 img-container">
                            <img
                                src={gentrack}
                                alt="Gentrack Logo"
                                id="company-logo"
                            />
                        </div>
                        <div className="col-sm-4">
                            <h2 className="subheading">Gentrack Ltd.</h2>
                            <h3 className="byline">
                                Software Engineer Intern, Nov 2019-Feb 2020
                            </h3>
                            <p className="body-paragraph">
                                Worked as part of a team of 3 to extend
                                functionality of the Veovo airport management
                                portal. Added applications to enable management
                                of financial and tax codes for all customer
                                airports around the world. Technology Stack:
                                Angular front-end with Protractor E2E automated
                                testing
                            </p>
                        </div>
                    </div>
                </Fade>

                <hr />

                <Fade delay={200}>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 img-container">
                            <img
                                src={adhb}
                                alt="ADHB Logo"
                                id="company-logo"
                                style={{ maxHeight: 250 }}
                            />
                        </div>
                        <div className="col-sm-4">
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
