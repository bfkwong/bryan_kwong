import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import "./Idiot.css";

class Idiot extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;

    return (
      <div className="idiot__c" style={{ height: window.innerHeight - 62 }}>
        <p className="idiot__subtitle">THE IDIOT</p>
        <h1 className="idiot__title">BRYAN KWONG</h1>
        <p className="idiot__text" style={{ marginBottom: "20px" }}>
          ... look I have many stories to tell which shows how big of an idiot I
          am. But for the sake of my job security and public image, let's both
          pretend they never happened and that I only have minor mistakes like
          accidentally putting in salt instead of sugar to get a lovely suprised
          when my green tea tasted like a saline solution. <br />
          <br />
          We especially shouldn't talk about the time when I drove to a Panda
          Express a block away from where I lived, ordered my food, and then
          walked back, forgetting that I drove my car there until I had to go
          get groceries and stood there panicking that my car has been stolen
          before I realized, oh wait, I left it at Panda Express.
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(Idiot);
