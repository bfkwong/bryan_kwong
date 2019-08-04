import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

import "./Photographer.css";

class Photographer extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;

    const imageLinks = [
      "https://i.imgur.com/Nc3qeqB.jpg",
      "https://i.imgur.com/IlQJBiI.jpg",
      "https://i.imgur.com/NL6li0x.jpg",
      "https://i.imgur.com/GiOvkIU.jpg",
      "https://i.imgur.com/u5j25DH.jpg",
      "https://i.imgur.com/UGM4pPY.jpg",
      "https://i.imgur.com/PhJmAy1.jpg",
      "https://i.imgur.com/6b6NpHy.jpg"
    ];

    return (
      <div
        className="photographer__c"
        style={{ height: window.innerHeight - 62 }}
      >
        <p className="programmer__sc-flex2__subtitle">THE PHOTOGRAPHER</p>
        <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
        <Card className="photographer__card">
          <Carousel className="photographer__carousel">
            {imageLinks.map((links, index) => (
              <Carousel.Item key={index}>
                <Image
                  src={`${links}`}
                  alt={`${index}`}
                  style={{ width: "100%" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(Photographer);
