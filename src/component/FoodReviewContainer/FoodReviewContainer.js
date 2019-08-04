import React from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";

import "./FoodReviewContainer.css";

export default class FoodReviewContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false
    };
  }

  render() {
    return (
      <div className="fd-rvw-cntnr">
        <Card>
          <Card.Body>
            <Card.Title>{this.props.data.title}</Card.Title>
            <Card.Text>
              {this.props.data.review[0]}{" "}
              {!this.state.expand && (
                <p
                  className="fd-rvw-cntnr__see-more--inline"
                  onClick={() => this.setState({ expand: true })}
                >
                  {"See More"}
                </p>
              )}
            </Card.Text>
            <Collapse in={this.state.expand}>
              <div>
                {this.props.data.review.slice(1).map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
                <p
                  className="fd-rvw-cntnr__see-more"
                  onClick={() => this.setState({ expand: false })}
                >
                  {"See Less"}
                </p>
              </div>
            </Collapse>
          </Card.Body>
          <Card.Footer>Posted 1 month ago</Card.Footer>
        </Card>
      </div>
    );
  }
}
