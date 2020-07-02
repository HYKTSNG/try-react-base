import React from "react"
import ReactDOM from "react-dom"
import { App } from "src/App"
import { GlobalStyles } from "src/GlobalStyles"
import * as serviceWorker from "src/serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
