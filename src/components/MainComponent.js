import React, { Component } from 'react';
import Menu from './MenuComponent'
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import DishDetail from './DishDetailComponent';
import { Redirect, Route, Switch } from 'react-router-dom';
import Contact from './ContactComponent';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]} 
          promotion={this.state.promotions.filter((promotion) => promotion.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}>
        </Home>
      );
    };

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}>
        </DishDetail>
      );
    };

    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route exact path="/contactus" component={Contact}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
