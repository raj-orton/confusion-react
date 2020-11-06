import { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if(comments.length === 0) {
      return (
        <div></div>
      );
    } else {
      const comment = comments.map((com) => {
        return (
          <ul key={com.id} className="list-unstyled">
            <li>{com.comment}</li>
            <br></br>
            <li>-- {com.author}, {com.date}</li>
          </ul>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comment}
        </div>
      );
    }
  }

  render() {
    if(this.props.dish === null) {
      return (
        <div></div>
      );
    } else {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          {this.renderComments(this.props.dish.comments)};
        </div>
      );
    }
  }
}

export default DishDetail;