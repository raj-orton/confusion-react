import { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log('DishDetail componentDidMount');
  }

  componentDidUpdate() {
    console.log('DishDetail componentDidUpdate');
  }

  renderDish(dish) {
    return (
      <Card key={dish.id}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if(comments != null) {
      const comment = comments.map((com) => {
        return (
          <ul key={com.id} className="list-unstyled">
            <li>{com.comment}</li>
            <br></br>
            <li>-- {com.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format( new Date(Date.parse(com.date)))}</li>
          </ul>
        );
      });
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {comment}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render() {
    console.log('DishDetail render');
    if(this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            {this.renderComments(this.props.dish.comments)};
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default DishDetail;