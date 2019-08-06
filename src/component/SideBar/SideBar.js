import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";

import portrait from "../../images/portrait.jpeg";
import "./SideBar.css";

class SideBar extends React.Component {
  render() {
    const fontMapping = {
      0: "Ubuntu Mono",
      1: "Montserrat",
      2: "Crimson Pro",
      3: "Schoolbell"
    };

    const titleMapping = {
      0: "#5aaad0",
      1: "#e15371",
      2: "#81a2ad",
      3: "#b6bf38"
    };

    const subtitleMapping = {
      0: "#aedae5",
      1: "#efafad",
      2: "#a7c6cf",
      3: "#f6ea9f"
    };

    const { Ui } = this.props;

    return (
      <React.Fragment>
        <Image src={portrait} style={{ width: "300px" }} />
        <div
          className="sidebar__sc-flex1__detail-c"
          style={{
            color: subtitleMapping[Ui.professionModeId],
            fontFamily: fontMapping[Ui.professionModeId]
          }}
        >
          {Ui.professionModeId === 0 && (
            <React.Fragment>
              <h2
                className="sidebar__sc-flex1__details-title"
                style={{ color: titleMapping[Ui.professionModeId] }}
              >
                ABOUT ME
              </h2>
              <b>
                <p className="sidebar__sc-flex1__details-details1">EDUCATION</p>
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Cal Poly, San Luis Obispo
                <br />
                BS in Computer Science
                <br />
                GPA: 3.75/4.00
              </p>
              <b>
                <p className="sidebar__sc-flex1__details-details1">
                  GENERAL SKILLS
                </p>{" "}
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Full Stack Web Development
                <br />
                Object Oriented Programming
                <br />
                Software Engineering
                <br />
                Machine Learning
                <br />
                Data Science and Statistics
              </p>
            </React.Fragment>
          )}
          {Ui.professionModeId === 1 && (
            <React.Fragment>
              <h2
                className="sidebar__sc-flex1__details-title"
                style={{ color: titleMapping[Ui.professionModeId] }}
              >
                ABOUT ME
              </h2>
              <b>
                <p className="sidebar__sc-flex1__details-details1">
                  WHAT I SHOOT
                </p>
              </b>
              <p className="sidebar__sc-flex1__details-details2">
                Landscape Photography
                <br />
                Architectural Photography
                <br />
                Sport Photography
              </p>
              <b>
                <p className="sidebar__sc-flex1__details-details1">MY GEAR</p>{" "}
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Canon EOS 70D
                <br />
                Canon EF 24-105mm f/4L
                <br />
                Canon EF 35mm f/2
                <br />
                Canon EF 50mm f/1.4
                <br />
                Canon EF 80mm f/1.8
              </p>
            </React.Fragment>
          )}
          {Ui.professionModeId === 2 && (
            <React.Fragment>
              <h2
                className="sidebar__sc-flex1__details-title"
                style={{ color: titleMapping[Ui.professionModeId] }}
              >
                ABOUT ME
              </h2>
              <b>
                <p className="sidebar__sc-flex1__details-details1">
                  WHAT I AM ABOUT
                </p>
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Food is a better way to learn the history of a culture than any
                textbook you can find. Within a culture's culinary traditions,
                you can learn about their past struggles, their values, and
                their society hierchy. By experiencing a culture's food, I hope
                to learn more about that culture.
              </p>
              <b>
                <p className="sidebar__sc-flex1__details-details1">
                  MY FAVORITE CUISINES
                </p>
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Californian • French • Sichuan • Italian • Indian • Japanese
              </p>
            </React.Fragment>
          )}
          {Ui.professionModeId === 3 && (
            <React.Fragment>
              <h2
                className="sidebar__sc-flex1__details-title"
                style={{ color: titleMapping[Ui.professionModeId] }}
              >
                ABOUT ME
              </h2>
              <b>
                <p className="sidebar__sc-flex1__details-details1">
                  LAUGHTER IS THE BEST MEDICINE
                </p>
              </b>

              <p className="sidebar__sc-flex1__details-details2">
                Ask your doctor if laughter is right for you. Side effects may
                include stomach pains, watery eyes, difficulty breathing and
                throat tenderness. If you experience any of the following
                symptoms, stop using Laughter and call your doctor right away.
                Do not use Laughter if you are allergic to Laughter or any of
                its ingredients
              </p>
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(SideBar);
