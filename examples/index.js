import React from "react";
import ReactDOM from "react-dom";
import { CircleSpinner } from "../src/components/circle";

class App extends React.Component {
    render() {
        return <CircleSpinner />;
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
