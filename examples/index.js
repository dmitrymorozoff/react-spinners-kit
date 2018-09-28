import React from "react";
import ReactDOM from "react-dom";
import { GridSpinner } from "../src/components/grid";
import { BallSpinner } from "../src/components/ball";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="loader-item">
                    <BallSpinner />
                </div>
                <div className="loader-item">
                    <GridSpinner />
                </div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
                <div className="loader-item">{/* <BallSpinner /> */}</div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
