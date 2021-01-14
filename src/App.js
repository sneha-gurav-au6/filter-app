import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import "./App.css";

//importing search component
import Searchbox from "./components/Searchbox";

class App extends Component {
    state = {
        //state for user search box
        searchWindow: "",
    };
    //function will run when changes happens in input box
    hanndlechange = (e) => {
        console.log(e.target.value);
        //setting search value in state
        this.setState({ searchWindow: e.target.value });
    };

    render() {
        //filter data coming from redux store on what user searched
        //give the result if user enter in upper case or lower case
        //.include finds wheter searched value present or not ,returns value
        const filter = this.props.list.filter((data) => {
            return data.name
                .toLowerCase()
                .includes(this.state.searchWindow.toLowerCase());
        });
        return (
            <div className="App">
                {/* //render searchbox component */}
                <Searchbox handle={this.hanndlechange} className="box1" />
                {/* render home component ,passing filtered data as props*/}
                <Home filter={filter} />
            </div>
        );
    }
}

//function which returning state from reducer
const mapStateToProps = (state) => {
    return {
        list: state,
    };
};

export default connect(mapStateToProps)(App);
