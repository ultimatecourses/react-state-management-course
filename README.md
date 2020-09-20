### Setup

```
cd course
yarn
yarn start
```

### Running the app from a video

If you want to run the app from a specific video, open up `course/src/index.js`

Change the `App` import, to point to the video you want to run. Ex:

```js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./01-useState/App"; // Change this import, and the app will run that video courses' final code

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```
