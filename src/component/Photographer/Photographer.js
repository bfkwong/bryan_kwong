import React from "react";
import { connect } from "react-redux";

import portrait from "../../images/portrait.jpeg";

import "./Photographer.css";

class Photographer extends React.Component {
    render() {
        const { Ui, Enum, toggleProfessionaMode } = this.props;

        return (
            <div className="photographer-c">
                <h1 className="programmer__title">BRYAN KWONG</h1>
                <p className="programmer__subtitle">The Photographer</p>
                <div className="programmer-sc--flex">
                    <div className="programmer-sc__container-port">
                        <h2 style={{ marginTop: "20px" }}>WHO AM I</h2>
                        <div
                            style={{
                                textAlign: "left",
                                marginLeft: "15%",
                                width: "70%",
                                fontWeight: 300
                            }}
                        >
                            <h4>MY INTEREST</h4>
                            <p>
                                Landscape Photography
                                <br />
                                Architectural Photography
                                <br />
                                Macro Photography
                                <br />
                                Juxtapositions
                            </p>

                            <h4>MY GEAR</h4>
                            <p>
                                Canon 70D
                                <br />
                                <br />
                                Canon EF 24-105mm f/4L
                                <br />
                                Canon EF 85mm f/1.8
                                <br />
                                Canon EF 50mm f/1.4
                                <br />
                                Canon EF 35mm f/2
                            </p>
                        </div>
                    </div>
                    <div className="programmer-sc__container-portimg">
                        <img
                            className="programmer__portrait "
                            id={"programmerPortrait"}
                            src={portrait}
                            alt={"portrait.png"}
                        />
                    </div>
                    <div className="programmer-sc__container-port">
                        <h2 style={{ marginTop: "20px" }}>ABOUT ME</h2>
                        <div
                            style={{
                                textAlign: "left",
                                marginLeft: "20%",
                                width: "60%",
                                fontWeight: 300
                            }}
                        >
                            <p>
                                NATURAL IS THE BEST MODEL BECAUSE IT WON'T EVER
                                GET MAD AT YOU. YET DESPITE THE UNLIMITED TIME A
                                PHOTOGRAPHER HAVE WITH IT, IT IS STILL THE MOST
                                DIFFICULT MODEL TO SHOOT IN A WAY THAT CAPTURES
                                ITS FULL BEAUTY.
                                <br />
                                <br />
                                THIS IS WHY I AM INTERESTED IN ARCHITECTURAL AND
                                NATURAL PHOTOGRAPHY.
                            </p>
                        </div>
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

export default connect(mapStateToProps)(Photographer);
