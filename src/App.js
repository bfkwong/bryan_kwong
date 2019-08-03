import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";

import Navbar from "./component/Navbar/Navbar";

import "./App.css";
import "./component/Programmer/Programmer.css";
import Programmer from "./component/Programmer/Programmer";
import Photographer from "./component/Photographer/Photographer";

import portrait from "./images/portrait.jpeg";
import SideBar from "./component/SideBar/SideBar";

class App extends React.Component {
  render() {
    const { Ui, Enum } = this.props;

    const bgColorMapping = {
      0: "#083F6A",
      1: "#55161F"
    };

    console.log(Ui);
    return (
      <div className="App">
        <Navbar />
        <div style={{ display: "flex" }}>
          <div
            className="app__sc-flex1"
            style={{ backgroundColor: bgColorMapping[Ui.professionModeId] }}
          >
            <SideBar />
          </div>
          {Ui.professionModeId === 0 && <Programmer />}
          {Ui.professionModeId === 1 && <Photographer />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(App);
