import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

class App extends React.Component {
  state = {
    imgs: []
  };

  getData = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(res => {
        const dogImg = res.data.message;
        let newState = [...this.state.imgs, dogImg];
        this.setState({ imgs: newState });
      })
      .catch(err => console.error(err));
  };

  clearData = () => {
    this.setState({ imgs: [] });
  };

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.getData}>
          Load Data
        </Button>
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.clearData}>
          Clear Data
        </Button>
        <br />
        <ul class="data">
          {this.state.imgs.map(img => (
            <li>{img}</li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
