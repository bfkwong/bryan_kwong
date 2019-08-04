import React from "react";
import { connect } from "react-redux";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import portrait from "../../images/portrait.jpeg";

import "./Programmer.css";

class Programmer extends React.Component {
  render() {
    const { Ui, Enum, toggleProfessionaMode } = this.props;

    return (
      <div
        className="programmer__c"
        style={{ height: window.innerHeight - 62 }}
      >
        <p className="programmer__sc-flex2__subtitle">THE PROGRAMMER</p>
        <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
        <p className="programmer__sc-flex2__container-title">WHAT I CAN DO</p>
        <div className="programmer__sc-flex2__card-overflow">
          <CardDeck>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>PROGRAMMING SKILLS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Python
                </Card.Subtitle>
                <Card.Text>
                  Tensorflow, SciKit-Learn, NumPy, Pandas, Spark, Matplotlib,
                  Seaborn, SQAlchemy, Django
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  HTML/CSS/JavaScript
                </Card.Subtitle>
                <Card.Text>
                  ReactJS, React-Redux, Bootstrap, ExpressJS, NodeJS,
                  CytoscapeJS, D3JS, Firebase
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Familiar with
                </Card.Subtitle>
                <Card.Text>
                  Java, C, Unix Programming, Splunk, Database Design
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>RELEVANT COURSEWORK</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Computer Science
                </Card.Subtitle>
                <Card.Text>
                  Discrete Structures • Algorithm • Data Structures • Object
                  Oriented Programming • Systems Programming • Systems
                  Architecture • Computer Organization
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Machine Learning and Statistics
                </Card.Subtitle>
                <Card.Text>
                  Regression Analysis • Experimental Design • Statistics for
                  Engineers • Linear Algebra • Multivariable Calculus • ML
                  Research
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <p className="programmer__sc-flex2__container-title">EXPERIENCES</p>
        <div className="programmer__sc-flex2__card-overflow">
          <CardDeck>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>VIASAT INC</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  SOFTWARE ENGINEER INTERN
                </Card.Subtitle>
                <Card.Text>
                  Worked in a team of three to manage and developed a full stack
                  web app and a REST API which monitors cybersecurity threats
                  against a network
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>UNANIMOUS AI</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  DATA SCIENCE INTERN
                </Card.Subtitle>
                <Card.Text>
                  Developed a data intensive front end web for collecting survey
                  data. Headed the statistical analysis for "Measuring Group
                  Personality with Swarm AI"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>CAL POLY</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  STUDENT ML RESEARCHER
                </Card.Subtitle>
                <Card.Text>
                  Researched optimal SVM Kernels for data satisfying specific
                  conditions. Studied the math behind different types of
                  dimensionality reduction.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <p className="programmer__sc-flex2__container-title">PROJECTS</p>
        <div className="programmer__sc-flex2__card-overflow">
          <CardDeck>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>CELEBRITY CHEFS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Graph Theory
                </Card.Subtitle>
                <Card.Text>
                  Build a front end web app using CytoscapeJS to show how
                  celebrity and Michelin starred chefs are all connected with
                  one another.
                </Card.Text>
              </Card.Body>
              <Card.Footer>Link to Project</Card.Footer>
            </Card>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>STOCK MARKET ANALYSIS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Data Science and Statistics
                </Card.Subtitle>
                <Card.Text>
                  Use machine learning to build a lightweight algorithm capable
                  of outperforming the averages by trading short term market
                  moves
                </Card.Text>
              </Card.Body>
              <Card.Footer>Link to Project</Card.Footer>
            </Card>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>THIS WEBSITE</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Full Stack Web Dev
                </Card.Subtitle>
                <Card.Text>
                  Develope an interactive personal site that show that I am more
                  than a programmer. I am also a photographer, food critic and
                  sometimes an idiot
                </Card.Text>
              </Card.Body>
              <Card.Footer>Link to Project</Card.Footer>
            </Card>
          </CardDeck>
        </div>
        <p className="programmer__sc-flex2__container-title">PUBLICATIONS</p>
        <div className="programmer__sc-flex2__card-overflow">
          <CardDeck>
            <Card style={{ width: "300px" }}>
              <Card.Body>
                <Card.Title>
                  Measuring Group Personality with Swarm AI
                </Card.Title>
                <Card.Text>
                  Gregg Wilcox, David Askay, Louis Rosenberg, Lynn Metcalf,
                  Bryan Kwong and Richard Liu. Measuring Group Personality with
                  Swarm AI. Submitted to Transdisciplinary AI 2019
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
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
