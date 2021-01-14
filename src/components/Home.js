import React, { Component } from "react";
//importing windowlist
import WindowList from "./WindowList";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {/* map that data coming as props and send to window list componnent */}
                    {this.props.filter.map((win, i) => (
                        <div>
                            {" "}
                            <WindowList
                                key={i}
                                name={win.name}
                                acc={win.acc}
                                status={win.status}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Home;
