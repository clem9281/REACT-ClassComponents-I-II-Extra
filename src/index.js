import React from "react";
import ReactDOM from "react-dom";
import Gallery from "./Components/Gallery";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Gallery />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
