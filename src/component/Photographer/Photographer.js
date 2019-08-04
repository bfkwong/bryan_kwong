import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

import CerroPeak from "../../images/photographer_images/CerroPeak.jpeg";
import ChinaEasternAirline from "../../images/photographer_images/ChinaEasternAirline.jpeg";
import GriffithSunset from "../../images/photographer_images/GriffithSunset.jpeg";
import IlFornaioRestaurant from "../../images/photographer_images/IlFornaioRestaurant.jpeg";
import PasadenaCityHall from "../../images/photographer_images/PasadenaCityHall.jpeg";
import RainingInChengdu from "../../images/photographer_images/RainingInChengdu.jpeg";
import SloSunset2 from "../../images/photographer_images/SloSunset2.jpeg";

import "./Photographer.css";

class Photographer extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;

    return (
      <div
        className="photographer__c"
        style={{ height: window.innerHeight - 62 }}
      >
        <p className="programmer__sc-flex2__subtitle">THE PHOTOGRAPHER</p>
        <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
        <div>
          <Carousel className="photographer__carousel">
            <Carousel.Item>
              <Image
                src={IlFornaioRestaurant}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={PasadenaCityHall}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={CerroPeak}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={ChinaEasternAirline}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={GriffithSunset}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={RainingInChengdu}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={SloSunset2}
                alt="cerro_peak"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(Photographer);
