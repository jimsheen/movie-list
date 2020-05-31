import React from 'react';
import {
	useLocation,
	Switch,
	Route,
} from 'react-router-dom';

import MovieSearch from './pages/MovieSearch';
import MovieDetailPage from './pages/MovieDetailPage';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Routes: React.FC = () => {

	const location = useLocation();

	return (
		<TransitionGroup component={null}>
	    <CSSTransition key={location.key} classNames="slide" timeout={500}>
	      <Switch location={location}>
	        <Route path="/" component={MovieSearch} exact />
	        <Route path="/movie/:id" component={MovieDetailPage} />
	      </Switch>
	    </CSSTransition>
	  </TransitionGroup>
	)
};

export default Routes