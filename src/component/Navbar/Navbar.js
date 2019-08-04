import React from "react";
import { connect } from "react-redux";

import { toggleProfessionaMode } from "../../redux/action/ui";

import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    const fontMapping = {
      0: "Ubuntu Mono",
      1: "Montserrat",
      2: "Crimson Pro",
      3: "Schoolbell"
    };

    const { Ui, Enum, toggleProfessionaMode } = this.props;

    console.log("UI", Ui);
    return (
      <div className="navbar__container">
        {Object.keys(Enum.professionModeById).map((modeKey, index) => (
          <div
            key={index}
            className="navbar__text"
            onClick={() => toggleProfessionaMode(parseInt(modeKey))}
            style={{
              fontWeight:
                parseInt(modeKey) !== Ui.professionModeId ? 300 : 1000,
              color:
                parseInt(modeKey) !== Ui.professionModeId ? "#333" : "#000",
              fontFamily: fontMapping[index]
            }}
          >
            {Enum.professionModeById[modeKey]}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

const mapDispatchToProps = { toggleProfessionaMode };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
