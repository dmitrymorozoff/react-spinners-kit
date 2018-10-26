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
} from "../src";

class App extends React.Component {
    render() {
        const codeString = `npm install --save react-spinners-kit`;
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
                    <div className="loader-item">
                        <BallSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<BallSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <GridSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<GridSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <ClapSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<ClapSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <SwapSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<SwapSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <GuardSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<GuardSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <WaveSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<WaveSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <CircleSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<CircleSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <PushSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<PushSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <HeartSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<HeartSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <SpiralSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<SpiralSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <StageSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<StageSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <SequenceSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<SequenceSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <ImpulseSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<ImpulseSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <FireworkSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<FireworkSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <PulseSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<PulseSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <CubeSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<CubeSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <FlagSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<FlagSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <SphereSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<SphereSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <FillSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<FillSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <BarsSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<BarsSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                    <div className="loader-item">
                        <DominoSpinner />
                        <div className="subcode">
                            <SyntaxHighlighter
                                language="jsx"
                                style={atomOneDark}
                            >
                                {`<DominoSpinner />`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
