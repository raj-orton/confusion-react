import React from 'react';
import RenderCard from './RenderCardComponent';

function Home(props) {
  return(
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={props.dish}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.promotion}></RenderCard>
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={props.leader}></RenderCard>
        </div>
      </div>
    </div>
  );
}

export default Home;