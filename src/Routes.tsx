import React from 'react';
import {
	useLocation,
	Switch,
	Route,
} from 'react-router-dom';

import MovieSearch from './pages/MovieSearch';
import MovieDetailPage from './pages/MovieDetailPage';
import Favourites from './pages/Favourites';

import { LayoutContainer } from './layout/';


import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Routes: React.FC = () => {

	const location = useLocation();

	return (
		<TransitionGroup component={null}>
	    <CSSTransition key={location.key} classNames="slide" timeout={500}>
		    <LayoutContainer>
		      <Switch location={location}>
		        <Route path="/" component={MovieSearch} exact />
		        <Route path="/movie/:id" component={MovieDetailPage} />
		        <Route path="/favourites" component={Favourites} />
		      </Switch>
	      </LayoutContainer>
	    </CSSTransition>
	  </TransitionGroup>
	)
};

export default Routes
