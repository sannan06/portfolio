import React from "react";
import Fade from "react-reveal/Fade";

export default function About() {
    return (
        <React.Fragment>
            <div className="container-fluid" style={{ marginTop: "2rem" }}>
                <Fade>
                    <div
                        className="row justify-content-md-center"
                        style={{ marginBottom: "1rem" }}
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
                    <div className="row justify-content-md-center">
                        <div className="col-5">
                            <div className="row">
                                <div className="col">
                                    <h2>Image here</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2 className="subheading">Planit</h2>
                                    <p className="body-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam et fermentum dui.
                                        Ut orci quam, ornare sed lorem sed,
                                        hendrerit auctor dolor. Nulla viverra,
                                        nibh quis ultrices malesuada, ligula
                                        ipsum vulputate diam, aliquam egestas
                                        nibh ante vel dui. Sed in tellus
                                        interdum eros vulputate placerat sed non
                                        enim. Pellentesque eget. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing
                                        elit. Etiam et fermentum dui. Ut orci
                                        quam, ornare sed lorem sed, hendrerit
                                        auctor dolor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <div
                        className="row justify-content-md-center"
                        style={{ marginTop: "1.3rem" }}
                    > */}
                        <div className="col-5">
                            <div className="row">
                                <div className="col">
                                    <h2>Image here</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h2 className="subheading">
                                        Recipe Search
                                    </h2>
                                    <p className="body-paragraph">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Etiam et fermentum dui.
                                        Ut orci quam, ornare sed lorem sed,
                                        hendrerit auctor dolor. Nulla viverra,
                                        nibh quis ultrices malesuada, ligula
                                        ipsum vulputate diam, aliquam egestas
                                        nibh ante vel dui. Sed in tellus
                                        interdum eros vulputate placerat sed non
                                        enim. Pellentesque eget. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing
                                        elit. Etiam et fermentum dui. Ut orci
                                        quam, ornare sed lorem sed, hendrerit
                                        auctor dolor.
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
