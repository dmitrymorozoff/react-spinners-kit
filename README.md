## react-spinners-kit

A collection of loading spinners built with [styled-components](https://styled-components.com).

## Examples

-   To check out live examples visit https://github.com/dmitrymorozoff/react-spinners-kit

## Installation

```bash
$ npm install --save react-spinners-kit
```

You can also test the components locally by cloning this repo and doing the following steps:

## NPM-scripts

Install dependencies from package.json:

```bash
$ npm install
```

Start local development server `localhost:1234`:

```bash
$ npm start
```

Run linter

```bash
$ npm run lint
```

## Usage

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { PushSpinner } from "react-spinners-kit";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return (
            <PushSpinner
                size={30}
                color="#686769"
                loading={loading}
            />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Available Spinners, PropTypes, and Default Values

| Spinner         | Size(number) | Color(string) | FrontColor(string) | BackColor(string) | LeftColor(string) | TopColor(string) |
| --------------- | ------------ | ------------- | ------------------ | ----------------- | ----------------- | ---------------- |
| BallSpinner     | 40           | #00ff89       | -                  | -                 | -                 | -                |
| BarsSpinner     | 40           | #00ff89       | -                  | -                 | -                 | -                |
| CircleSpinner   | 30           | #fff          | -                  | -                 | -                 | -                |
| CubeSpinner     | 25           | -             | #00ff89            | #686769           | -                 | -                |
| DominoSpinner   | 100          | #686769       | -                  | -                 | -                 | -                |
| FillSpinner     | 20           | #686769       | -                  | -                 | -                 | -                |
| FireworkSpinner | 40           | #fff          | -                  | -                 | -                 | -                |
| FlagSpinner     | 40           | #fff          | -                  | -                 | -                 | -                |
| GridSpinner     | 40           | #fff          | -                  | -                 | -                 | -                |
| GuardSpinner    | 40           | -             | #00ff89            | -                 | #686769           | -                |
| HeartSpinner    | 40           | #fff          | -                  | -                 | -                 | -                |
| ImpulseSpinner  | 40           | -             | -                  | #686769           | -                 | #00ff89          |
| PulseSpinner    | 40           | #fff          | -                  | -                 | -                 | -                |
| PushSpinner     | 30           | #686769       | -                  | -                 | -                 | -                |
| SequenceSpinner | 40           | -             | #686769            | -                 | #00ff89           | -                |
| SphereSpinner   | 30           | #fff          | -                  | -                 | -                 | -                |
| SpiralSpinner   | 40           |               | #00ff89            | #686769           | -                 | -                |
| StageSpinner    | 40           | #fff          | -                  | -                 | -                 | -                |
| SwapSpinner     | 40           | #686769       | -                  | -                 | -                 | -                |
| WaveSpinner     | 30           | #fff          | -                  | -                 | -                 | -                |


## License

MIT