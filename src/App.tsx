import React, { useState } from 'react';

import { Box, Flex } from 'rebass';

import { ThemeProvider, theme } from './theme'
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {

	const [isSearching, setIsSearching] = useState(false);
	const [isMovieListActive, setMovieListActive] = useState(false);
	const [searchData, setSearchData] = useState(null);

	const transitionTimeout = 800;
	const align = isSearching ? 'start' : 'center';
	const height = isSearching ? 'calc(0% + 0px)' : 'calc(100% + 0px)';
	const my = isSearching ? 3 : 0;

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
							minHeight: height,
							transition: `min-height ${transitionTimeout}ms`,
							flexWrap: 'wrap',
							my,
						}}
					>
						<Box
							width={1}
						>
							<SearchBar handleSubmit={handleSubmit} isSearching={isSearching} />
						</Box>
					</Flex>
					{isMovieListActive &&
						<Box width={1}>
							<MovieList searchData={searchData} />
						</Box>
					}
			</Box>

		</ThemeProvider>
	);
}

export default App;
