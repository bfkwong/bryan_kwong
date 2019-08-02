import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";

import portrait from "../../images/portrait.jpeg";

import "./Programmer.css";

class Programmer extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;

    return (
      <div className="programmer__c">
        <div className="programmer__c--flex">
          <div className="programmer__sc-flex1">
            <Image src={portrait} style={{ width: "100%" }} />
            <div className="programmer__sc-flex1__detail-c">
              <h2 className="programmer__sc-flex1__details-title">ABOUT ME</h2>
              <p className="programmer__sc-flex1__details-details1">
                EDUCATION
              </p>
              <p className="programmer__sc-flex1__details-details2">
                Cal Poly, San Luis Obispo
                <br />
                BS in Computer Science
                <br />
                GPA: 3.75/4.00
              </p>
              <p className="programmer__sc-flex1__details-details1">
                GENERAL SKILLS
              </p>
              <p className="programmer__sc-flex1__details-details2">
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
          </div>
          <div className="programmer__sc-flex2">
            <p className="programmer__sc-flex2__subtitle">THE PROGRAMMER</p>
            <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
            <p className="programmer__sc-flex2__container-title">EXPERIENCES</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(Programmer);
