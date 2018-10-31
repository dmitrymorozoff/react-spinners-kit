import React from "react";
import ReactDOM from "react-dom";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { atomOneDark } from "react-syntax-highlighter/styles/hljs";
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
    ClapSpinner,
    RotateSpinner,
    SwishSpinner,
    GooSpinner,
    CombSpinner,
} from "../src";

const SpinnerWrapper = ({ children }) => {
    const loaderName = children.type.name;
    return (
        <div className="loader-item">
            {children}
            <div className="subcode">
                <SyntaxHighlighter language="jsx" style={atomOneDark}>
                    {`<${loaderName} />`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

class App extends React.Component {
    render() {
        const codeString = `npm install --save react-spinners-kit`;
        const spinners = [
            BallSpinner,
            SwapSpinner,
            BarsSpinner,
            ClapSpinner,
            GridSpinner,
            WaveSpinner,
            PushSpinner,
            FireworkSpinner,
            StageSpinner,
            HeartSpinner,
            GuardSpinner,
            CircleSpinner,
            RotateSpinner,
            SpiralSpinner,
            PulseSpinner,
            SwishSpinner,
            SequenceSpinner,
            ImpulseSpinner,
            CubeSpinner,
            FlagSpinner,
            FillSpinner,
            SphereSpinner,
            DominoSpinner,
            GooSpinner,
            CombSpinner,
        ].sort(() => Math.random() - 0.5);
        return (
            <div className="outer">
                <div className="header">
                    <h1 className="header-title">react-spinners-kit</h1>
                    <div className="header-subtitle">
                        A collection of loading spinners built with
                        styled-components.
                    </div>
                </div>
                <div className="code">
                    <SyntaxHighlighter language="bash" style={atomOneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="container">
                    {spinners.map((Spinner, index) => {
                        return (
                            <SpinnerWrapper key={index.toString()}>
                                {<Spinner />}
                            </SpinnerWrapper>
                        );
                    })}
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
