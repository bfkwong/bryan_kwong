import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";

import portrait from "../../images/portrait.jpeg";

import "./Programmer.css";

class Programmer extends React.Component {
    render() {
        const { Ui, Enum, toggleProfessionaMode } = this.props;

        return (
            <div className="programmer-c">
                <h1 className="programmer__title">BRYAN KWONG</h1>
                <p className="programmer__subtitle">The Programmer</p>
                <div className="programmer-sc--flex">
                    <div className="programmer-sc__container-port">
                        <h2 style={{ marginTop: "30px" }}>ABOUT ME</h2>
                        <div
                            style={{
                                textAlign: "left",
                                marginLeft: "15%",
                                width: "70%",
                                fontWeight: 300
                            }}
                        >
                            <h4>EDUCATION</h4>
                            <p>
                                Cal Poly, San Luis Obispo
                                <br />
                                BS in Computer Science
                                <br />
                                Expected Dec 2020
                                <br />
                                GPA: 3.75/4.00
                            </p>

                            <h4>RELAVANT COURSES</h4>
                            <p>
                                Data Structures
                                <br />
                                Systems Programming
                                <br />
                                Object Oriented Programming
                                <br />
                                Algorithms
                                <br />
                                Linear Algebra
                                <br />
                                Multivariable Calculus <br />
                                Regression Analysis <br />
                                Discrete Structures <br />
                                Statistics for Engineers <br />
                                and more ...
                            </p>
                        </div>
                    </div>
                    <div className="programmer-sc__container-portimg">
                        {/* <img
                            className="programmer__portrait "
                            id={"programmerPortrait"}
                            src={portrait}
                            alt={"portrait.png"}
                        /> */}
                        <Image
                            src={portrait}
                            style={{
                                width: "100%",
                                marginTop: "15%"
                            }}
                            fluid
                        />
                    </div>
                    <div className="programmer-sc__container-port">
                        <h2 style={{ marginTop: "20px" }}>SKILLS</h2>
                        <div
                            style={{
                                textAlign: "left",
                                marginLeft: "15%",
                                width: "70%",
                                fontWeight: 300
                            }}
                        >
                            <h4>GENERAL SKILLS</h4>
                            <p>
                                Full Stack Web Development
                                <br />
                                Object Oriented Programming
                                <br />
                                Software Development
                                <br />
                                Maching Learning
                                <br />
                                Data Science
                                <br />
                                Statistical Analysis
                            </p>

                            <h4>SPECIFIC SKILLS</h4>
                            <p>
                                <b>PYTHON</b>
                                <br />
                                Tensorflow, SciKit-Learn
                                <br />
                                NumPy, Pandas, Spark
                                <br />
                                <b>HTML/CSS/JavaScript</b>
                                <br />
                                MERN Stack, D3JS, CytoscapeJS
                                <br />
                                <b>FAMILIAR WITH</b>
                                <br />
                                Unix Programming, Splunk
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className="programmer__preflex-title">Experience</h2>
                <div className="programmer-sc--flex">
                    <div className="programmer-sc__container">
                        <h3 className="programmer__title">VIASAT</h3>
                        <p className="programmer__subtitle">
                            Software Engineer Intern
                        </p>
                        <p className="programmer__subtitle-text">
                            Worked in a team of three to manage and develop a
                            full stack application including the REST API that
                            monitors cyber security threats.
                        </p>
                    </div>
                    <div className="programmer-sc__container">
                        <h3 className="programmer__title">UNANIMOUS AI</h3>
                        <p className="programmer__subtitle">
                            Data Science Intern
                        </p>
                        <p className="programmer__subtitle-text">
                            Developed a data intensive front end web app used
                            for collecting survey data. Headed the statistical
                            analysis used in the "Measuring Group Personality
                            with Swarm AI"
                        </p>
                    </div>
                    <div className="programmer-sc__container">
                        <h3 className="programmer__title">CAL POLY</h3>
                        <p className="programmer__subtitle">
                            Student ML Researcher
                        </p>
                        <p className="programmer__subtitle-text">
                            Researched optimal SVM Kernel Functions for data
                            which satisfies specific conditions. Studied the
                            math and logic behind various types of
                            dimensionality reduction.
                        </p>
                    </div>
                </div>
                <h2 className="programmer__preflex-title">Publications</h2>
                <p
                    style={{
                        width: "60%",
                        marginLeft: "20%",
                        textAlign: "left"
                    }}
                >
                    Gregg Wilcox, David Askay, Louis Rosenberg, Lynn Metcalf,
                    Bryan Kwong and Richard Liu. Measuring Group Personality
                    with Swarm AI. Submitted to Transdisciplinary AI 2019
                </p>
                <h2
                    className="programmer__preflex-title"
                    style={{ marginBottom: "100px" }}
                >
                    Projects
                </h2>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Ui: state.Ui,
    Enum: state.Enum
});

export default connect(mapStateToProps)(Programmer);
