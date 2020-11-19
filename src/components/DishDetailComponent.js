import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';

function Dish({dish}) {
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

function Comment({comments}) {
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

function DishDetail(props) {
  if(props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr></hr>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Dish dish={props.dish}></Dish>
          </div>
          <Comment comments={props.comments}></Comment>
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default DishDetail;