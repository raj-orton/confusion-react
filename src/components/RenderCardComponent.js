import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function RenderCard({item}) {
  return(
    <Card>
      <CardImg src={item.image} alt={item.name}></CardImg>
      <CardBody>
        <CardTitle tag="h4">{item.name}</CardTitle>
        {item.designation ?<CardSubtitle tag="h5">{item.designation}</CardSubtitle> :null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default RenderCard;