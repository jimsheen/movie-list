import React from 'react';

import {
	BrowserRouter,
} from 'react-router-dom';

import { ThemeProvider, theme } from './theme';

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
