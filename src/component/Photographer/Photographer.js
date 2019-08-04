import React from "react";
import { connect } from "react-redux";

import portrait from "../../images/portrait.jpeg";

import "./Photographer.css";

class Photographer extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;
    return (
      <div className="photographer__c">
        <p className="programmer__sc-flex2__subtitle">THE PHOTOGRAPHER</p>
        <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
        <p className="programmer__sc-flex2__container-title">SOME OF MY WORK</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(Photographer);
