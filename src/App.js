import React from "react";
import { connect } from "react-redux";

import Navbar from "./component/Navbar/Navbar";

import "./App.css";
import Programmer from "./component/Programmer/Programmer";
import Photographer from "./component/Photographer/Photographer";

class App extends React.Component {
    render() {
        const { Ui, Enum } = this.props;

        console.log(Ui);
        return (
            <div className="App">
                <Navbar />
                {Ui.professionModeId === 0 && <Programmer />}
                {Ui.professionModeId === 1 && <Photographer />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Ui: state.Ui,
    Enum: state.Enum
});

export default connect(mapStateToProps)(App);
