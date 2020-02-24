import React from "react";
import Fade from "react-reveal/Fade";

import planit from "../images/planit/planit-3.png";
import recipe from "../images/recipe/recipe-1.png";

export default function About() {
    return (
        <React.Fragment>
            <div className="container-fluid" style={{ marginTop: "2rem" }}>
                <Fade>
                    <div
                        className="row justify-content-md-center"
                        style={{ marginBottom: "1rem" }}
                        id="projects"
                    >
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                        <div className="col-md-auto">
                            <h1 className="section-heading">My Projects</h1>
                        </div>
                        <div className="col-1">
                            <hr className="section-break" />
                        </div>
                    </div>
                </Fade>

                <Fade>
                    <div className="row justify-content-md-center projects">
                        <div className="col-6">
                            <div className="row">
                                <div className="col image">
                                    <img src={planit} alt="Planit" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2 className="subheading">Planit</h2>
                                    <p className="body-paragraph">
                                        A proof-of-concept for a service
                                        handling all aspects of travel planning,
                                        from flights, hotels, attractions etc,
                                        with smart recommendations based on
                                        travellers. Created during DEVS
                                        hackathon using React.JS. Project
                                        involved market research and validation,
                                        revenue analysis, project timeline, and
                                        a presentation to a panel of judges
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-md-center projects">
                        <div className="col-6">
                            <div className="row">
                                <div className="col image">
                                    <img src={recipe} alt="Recipe Search" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2 className="subheading">
                                        Recipe Search
                                    </h2>
                                    <p className="body-paragraph">
                                        An online recipe bank web-app to store
                                        and collaborate on food recipes.
                                        Multiple user system, with
                                        authentication. Frontend with React
                                        TypeScript, backend with C# and ASP.NET
                                        Core, hosted as Azure SQL with blob
                                        storage. Developed as submission for
                                        Microsoft Student Accelerator 2018, and
                                        presented as a potential product to
                                        judges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </React.Fragment>
    );
}
