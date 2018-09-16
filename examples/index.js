import React from "react";
import ReactDOM from "react-dom";
import { TrianglesSpinner } from "../src/components/triangles";

class App extends React.Component {
    render() {
        return <TrianglesSpinner />;
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
