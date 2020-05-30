import React from 'react';

import { Box } from 'rebass';

import {
	withRouter,
	useLocation,
	Switch,
	Route,
} from 'react-router-dom';

import MovieSearch from './pages/MovieSearch';
import MovieDetail from './pages/MovieDetail';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Routes: React.FC = () => {

	const location = useLocation();

	return (
		<TransitionGroup component={null}>
	    <CSSTransition key={location.key} classNames="slide" timeout={500}>
	      <Switch location={location}>
	        <Route path="/" component={MovieSearch} exact />
	        <Route path="/:id" component={MovieDetail} />
	      </Switch>
	    </CSSTransition>
	  </TransitionGroup>
	)
};

export default Routes