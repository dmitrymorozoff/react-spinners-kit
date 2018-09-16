## Elementary UI

A collection of reusable React UI components built with [styled-components](https://styled-components.com).

### Documentation

-   To check out live examples visit [https://dmitrymorozoff.github.io/elementary-ui-kit/](https://dmitrymorozoff.github.io/elementary-ui-kit/)

### Install

```bash
# Install
$ npm install --save elementary-ui-kit
```

```bash
# You can also test the components locally by cloning this repo and doing the following steps:
$ git clone https://github.com/dmitrymorozoff/elementary-ui-kit.git

# Install dependencies from package.json:
$ npm install

# Start local development server `localhost:1234`:
$ npm start

# Start react-styleguidist
$ npm run docs

# Run linter
$ npm run lint

# Start tests followed by jest.
$ npm run test
```

### Quick Start:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
    Card,
    CardContent,
    Text,
    CardButtons,
    Button,
} from "elementary-ui-kit";

function App() {
    return (
        <Card hover={true}>
            <CardContent>
                <Text fontSize="28px" gutterBottom={true}>
                    Penguin
                </Text>
                <Text>
                    They live almost exclusively in the Southern Hemisphere,
                    with only one species, the Galapagos penguin, found north of
                    the equator.
                </Text>
                <CardButtons>
                    <Button>Share</Button>
                    <Button type="primary">More</Button>
                </CardButtons>
            </CardContent>
        </Card>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Components:

-   Forms
    -   [Button](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Button)
    -   [Input](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Input)
    -   [Link](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Link)
    -   [Switch](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Switch)
    -   [Checkbox](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Checkbox)
    -   [Select](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Select)
        -   [SelectItem](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/forms/Select/components/SelectItem)
-   Others
    -   [Card](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card)
        -   [CardButtons](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardButtons)
        -   [CardContent](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardContent)
        -   [CardMedia](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Card/components/CardMedia)
    -   [Collapse](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Collapse)
        -   [CollapseTitle](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Collapse/components/CollapseTitle)
        -   [CollapseContent](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Collapse/components/CollapseContent)
    -   [Text](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Text)
    -   [Label](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/others/Label)
-   Icons
    -   [RightArrow](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightArrow)
    -   [RightUp](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightUp)
    -   [RightDown](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/RightDown)
    -   [Search](https://github.com/dmitrymorozoff/elementary-ui-kit/tree/master/src/lib/components/icons/Search)

#### @TODO

-   [ ] Table
-   [ ] Modal
-   [ ] ModalPortal
-   [ ] List
-   [ ] Radio
-   [ ] Tabs
-   [ ] Textarea
-   [ ] Nav
-   [ ] Pagination
