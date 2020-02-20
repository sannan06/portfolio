import React from "react";
import { Link } from "react-scroll";

export default function Navigation() {
    return (
        <React.Fragment>
            <div className="row nav-row" style={{ paddingTop: "0.5rem" }}>
                <div className="col-auto">
                    <p>Sannan Hafeez</p>
                </div>
                <div className="col-auto ml-auto">
                    <Link to="about" smooth={true}>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            About
                        </button>
                    </Link>
                    <Link to="experience" smooth={true}>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            Experience
                        </button>
                    </Link>
                    <Link to="projects" smooth={true}>
                        <button type="button" class="btn btn-outline-light btn-sm">
                            Projects
                        </button>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}
