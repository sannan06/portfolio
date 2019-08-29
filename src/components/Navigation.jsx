import React from "react";

export default function Navigation() {
    return (
        <React.Fragment>
            <div className="row nav-row" style={{ paddingTop: "0.5rem" }}>
                <div className="col-auto">
                    <p>Sannan Hafeez</p>
                </div>
                <div className="col-auto ml-auto">
                    <button type="button" class="btn btn-outline-light btn-sm">
                        About
                    </button>
                    <button type="button" class="btn btn-outline-light btn-sm">
                        Experience
                    </button>
                    <button type="button" class="btn btn-outline-light btn-sm">
                        Projects
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
}
