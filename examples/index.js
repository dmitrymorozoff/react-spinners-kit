import React from "react";
import ReactDOM from "react-dom";
import {
    SwapSpinner,
    BarsSpinner,
    BallSpinner,
    GridSpinner,
    WaveSpinner,
    PushSpinner,
    FireworkSpinner,
    StageSpinner,
    HeartSpinner,
    GuardSpinner,
    CircleSpinner,
    SpiralSpinner,
    PulseSpinner,
    SequenceSpinner,
    DominoSpinner,
    ImpulseSpinner,
    CubeSpinner,
    FillSpinner,
    SphereSpinner,
    FlagSpinner,
} from "../src";

class App extends React.Component {
    render() {
        return (
            <div>
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
                        <GuardSpinner />
                    </div>
                    <div className="loader-item">
                        <WaveSpinner />
                    </div>
                    <div className="loader-item">
                        <CircleSpinner />
                    </div>
                    <div className="loader-item">
                        <PushSpinner />
                    </div>
                    <div className="loader-item">
                        <HeartSpinner />
                    </div>
                    <div className="loader-item">
                        <SpiralSpinner />
                    </div>
                    <div className="loader-item">
                        <StageSpinner />
                    </div>
                    <div className="loader-item">
                        <SequenceSpinner />
                    </div>
                    <div className="loader-item">
                        <ImpulseSpinner />
                    </div>
                    <div className="loader-item">
                        <FireworkSpinner />
                    </div>
                    <div className="loader-item">
                        <PulseSpinner />
                    </div>
                    <div className="loader-item">
                        <CubeSpinner />
                    </div>
                    <div className="loader-item">
                        <FlagSpinner />
                    </div>
                    <div className="loader-item">
                        <SphereSpinner />
                    </div>
                    <div className="loader-item">
                        <FillSpinner />
                    </div>
                    <div className="loader-item">
                        <BarsSpinner />
                    </div>
                    <div className="loader-item">
                        <DominoSpinner />
                    </div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
