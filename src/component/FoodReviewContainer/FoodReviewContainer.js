import React from "react";
import Card from "react-bootstrap/Card";

import "./FoodReviewContainer.css";

export default class FoodReviewContainer extends React.Component {
  render() {
    return (
      <div className="fd-rvw-cntnr">
        <Card>
          <Card.Body>
            <Card.Title>{this.props.data.title}</Card.Title>
            <Card.Text>
              {this.props.data.review[0].slice(0, 300)}
              <p className="fd-rvw-cntnr__see-more"> ... See More</p>
            </Card.Text>
            {/* {this.props.data.review.map(txt => (
              <Card.Text>{txt}</Card.Text>
            ))} */}
          </Card.Body>
          <Card.Footer>Posted 1 month ago</Card.Footer>
        </Card>
      </div>
    );
  }
}
