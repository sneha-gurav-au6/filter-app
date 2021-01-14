import React from "react";
import "./style/window.css";

export default function WindowList(props) {
    return (
        <div>
            {/* cards are used to render data on web page,data is coming as props */}
            <div className="col-4">
                <div className="card">
                    <div className="half-circle"></div>
                    <div className="card-body">
                        <div className="card-origin">
                            <p className="card-title">
                                <b style={{ color: "white" }}>{props.name}</b>
                            </p>
                            <p className="card-text">{props.acc} accessaries</p>
                            <a href="#" className="btn">
                                <b>{props.status}</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
