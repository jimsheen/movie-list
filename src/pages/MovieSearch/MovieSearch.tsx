import React, { useState } from 'react';

import { Flex, Box } from 'rebass';

import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

import { LayoutContainer } from '../../layout';

const MovieSearch: React.FC = () => {

	const [isSearching, setIsSearching] = useState(false);
	const [isMovieListActive, setMovieListActive] = useState(false);
	const [searchData, setSearchData] = useState(null);

	const transitionTimeout = isMovieListActive ? 0 : 800;
	const align = isSearching ? 'start' : 'center';
	const height = isSearching ? 'calc(0% + 0px)' : 'calc(100% + 0px)';
	const my = isSearching ? 3 : 0;

	const handleSubmit = (data: any) => {
		setIsSearching(true);
		// show movie list component after transition
		setTimeout(() => {
			setSearchData(data);
			setMovieListActive(true);
		}, transitionTimeout);
	}

	return (
		<LayoutContainer>
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
		</LayoutContainer>
	)
}

export default MovieSearch
