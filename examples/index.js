import React from "react";
import ReactDOM from "react-dom";
import { Spinner } from "../src/components/spinner";

class App extends React.Component {
    render() {
        return <Spinner />;
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
