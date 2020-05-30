import React, { useState } from 'react';
import { Box } from 'rebass';

import {
	BrowserRouter,
	Route,
	Switch,
	Link,
	withRouter,
	useLocation
} from 'react-router-dom';

import { TransitionGroup, CSSTransition } from 'react-transition-group';


import { ThemeProvider, theme } from './theme';

import MovieSearch from './pages/MovieSearch';

import Routes from './Routes';

function App() {

	return (
		<ThemeProvider theme={theme}>
			  <BrowserRouter>
      		<Routes />
      	</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
