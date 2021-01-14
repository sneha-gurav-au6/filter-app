import React from "react";
import "./style/search.css";

export default function Searchbox(props) {
    return (
        <div>
            {/* user serach bar */}
            <p className="box">
                <b>Enter name to Filter</b> 😊
            </p>
            {/* user can enter input here */}
            <input onChange={props.handle} type="text" className="inputbox" />
        </div>
    );
}
