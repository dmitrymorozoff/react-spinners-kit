import React from "react";
import ReactDOM from "react-dom";
import {
    SwapSpinner,
    BarsSpinner,
    BallSpinner,
    GridSpinner,
    WaveSpinner,
} from "../src";

class App extends React.Component {
    render() {
        return (
            <div>
                <div class="title">react-spinners</div>
                {/* // <WaveSpinner /> */}
                <div className="container">
                    <div className="loader-item">
                        <BallSpinner />
                    </div>
                    <div className="loader-item">
                        <GridSpinner />
                    </div>
                    <div className="loader-item">
                        <SwapSpinner />
                    </div>
                    <div className="loader-item">
                        <BarsSpinner />
                    </div>
                    <div className="loader-item">
                        <WaveSpinner />
                    </div>
                    <div className="loader-item">{/* <BallSpinner /> */}</div>
                    <div className="loader-item">{/* <BallSpinner /> */}</div>
                    <div className="loader-item">{/* <BallSpinner /> */}</div>
                    <div className="loader-item">{/* <BallSpinner /> */}</div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
