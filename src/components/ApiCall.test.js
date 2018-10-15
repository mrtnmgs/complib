import React from "react"
import ReactDOM from "react-dom"
import ApiCall from "./ApiCall"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<ApiCall symbol="msft" />, div)
  ReactDOM.unmountComponentAtNode(div)
})