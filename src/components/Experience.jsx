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
                            <h1 className="section-heading">What I've Done</h1>
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
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam et fermentum dui. Ut orci
                                quam, ornare sed lorem sed, hendrerit auctor
                                dolor. Nulla viverra, nibh quis ultrices
                                malesuada, ligula ipsum vulputate diam, aliquam
                                egestas nibh ante vel dui. Sed in tellus
                                interdum eros vulputate placerat sed non enim.
                                Pellentesque eget. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Etiam et fermentum
                                dui. Ut orci quam, ornare sed lorem sed,
                                hendrerit auctor dolor. Nulla viverra, nibh quis
                                ultrices malesuada, ligula ipsum vulputate diam,
                                aliquam egestas nibh ante vel dui. Sed in tellus
                                interdum eros vulputate placerat sed non enim.
                                Pellentesque eget.
                            </p>
                        </div>
                    </div>
                </Reveal>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <button type="button" class="btn btn-outline-dark">
                            Get My CV
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
