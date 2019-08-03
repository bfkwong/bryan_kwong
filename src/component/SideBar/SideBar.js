import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";

import portrait from "../../images/portrait.jpeg";
import "./SideBar.css";

class SideBar extends React.Component {
  render() {
    const bgColorMapping = {
      0: "#083F6A",
      1: "#55161F"
    };

    const titleMapping = {
      0: "#aedae5",
      1: "#e15371"
    };

    const subtitleMapping = {
      0: "#5aaad0",
      1: "#c95973"
    };

    const textMapping = {
      0: "#aedae5",
      1: "#efafad"
    };

    const { Ui } = this.props;

    return (
      <React.Fragment>
        <Image src={portrait} style={{ width: "300px" }} />
        <div
          className="sidebar__sc-flex1__detail-c"
          style={{ backgroundColor: bgColorMapping[Ui.professionModeId] }}
        >
          <h2
            className="sidebar__sc-flex1__details-title"
            style={{ color: titleMapping[Ui.professionModeId] }}
          >
            ABOUT ME
          </h2>
          <p className="sidebar__sc-flex1__details-details1">EDUCATION</p>
          <p className="sidebar__sc-flex1__details-details2">
            Cal Poly, San Luis Obispo
            <br />
            BS in Computer Science
            <br />
            GPA: 3.75/4.00
          </p>
          <p className="sidebar__sc-flex1__details-details1">GENERAL SKILLS</p>
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
