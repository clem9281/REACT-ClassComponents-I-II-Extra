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
  componentDidMount() {
    this.getImages("https://picsum.photos/v2/list");
  }
  getImages = URL => {
    // This code is bringing in an array of image objects and setting them to this.state.images. You don't need to understand every line of this.getImages. Check out the next comment, there is a console.log of what is being set to this.state.images
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // Look at what is being set to this.state.images
        console.log(data);
        this.setState({ images: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  // AFTER you have the image tiles rendering, fill in these handlers for the form
  handleChanges = () => {};
  handleSubmit = () => {};
  render() {
    return (
      <div className="App">
        <div className="intro">
          <h1>Class Components I & II</h1>
          <ol>
            <li>
              Check out the componentDidMount method. It is bringing in an array
              of image items and setting them on this.state.images.
            </li>
            <li>Pass the images down to gallery</li>
            <li>
              Follow the instructions in Gallery: iterate over the images and
              render an ImageTile for each
            </li>
            <li>
              In ImageTile we want a figure with an image and a figcaption.
              Please set the image source to the download_url, set the caption
              to the author name and the alt text to the url
            </li>
            <li>
              If you have finished with that set up the form to add a new image.
              Please don't alter the hierarchy of components: ImageForm and
              ImageTile should be children of Gallery, and Gallery should be a
              child of App.
            </li>
          </ol>
        </div>
        {/* Pass the images on state down to gallery */}
        <Gallery />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
