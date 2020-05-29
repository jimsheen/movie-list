import React, { useState } from 'react';

import { Box, Flex } from 'rebass';

import { ThemeProvider, theme } from './theme'
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {

	const [isSearching, setIsSearching] = useState(false);
	const [isMovieListActive, setMovieListActive] = useState(false);
	const [searchData, setSearchData] = useState({});

	const transitionTimeout = 2000;
	const align = isSearching ? 'start' : 'center';
	const height = isSearching ? 'calc(0% + 250px)' : 'calc(100% + 0px)';

	const handleSubmit = (data: any) => {
		console.log(data);
		// send data to query builder
		setIsSearching(true);
		// show movie list component after transition
		setTimeout(() => {
			setSearchData(data);
			setMovieListActive(true);
		}, transitionTimeout);
	}

	return (
    <ThemeProvider theme={theme}>
			<Box
				sx={{
					maxWidth: 1200,
					mx: 'auto',
					height: '100%',
					px: 5,
				}}>
					<Flex 
						alignItems="center" 
						justifyContent="center"
						sx={{
							height,
							transition: `height ${transitionTimeout}ms`,
							flexWrap: 'wrap',
						}}
					>
						<Box
							width={1}
						>
							<SearchBar handleSubmit={handleSubmit} />
						</Box>
					</Flex>
					{isMovieListActive &&
						<Box width={1}>
							find movies based on search term ere'
							<MovieList searchData={searchData} />
						</Box>
					}
			</Box>

		</ThemeProvider>
	);
}

export default App;
