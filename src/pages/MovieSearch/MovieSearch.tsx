import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import {
	Flex,
	Box,
	Text
} from 'rebass';

import { Animated } from 'react-animated-css';

import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';
import StyledLink from '../../components/StyledLink';

const MovieSearch: React.FC = () => {

	const [isSearching, setIsSearching] = useState(false);
	const [isMovieListActive, setMovieListActive] = useState(false);
	const [searchData, setSearchData] = useState(null);

	const transitionTimeout = isMovieListActive ? 0 : 800;
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
		<React.Fragment>
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
					<Animated
		  			animationIn="fadeIn"
		  			animationOut="fadeOut"
		  			isVisible={true}
		  		>
		  			<Text 
							fontSize={isSearching ? [3,4] : [4,6]} 
							mb={4}
							sx={{
								transition: 'font-size 800ms',
							}}
						>
							Search for a movie
						</Text>
						<SearchBar handleSubmit={handleSubmit} isSearching={isSearching} />
							<Animated
				  			animationIn="fadeIn"
				  			animationOut="fadeOut"
				  			isVisible={!isSearching}
				  		>
				  		<StyledLink>
				  			Or view <Link to="/favourites">favourites</Link>
				  		</ StyledLink>
						</Animated>
					</Animated>
					{isMovieListActive &&
						<Box width={1}>
							<MovieList searchData={searchData} />
						</Box>
					}
				</Box>
			</Flex>
		</React.Fragment>
	)
}

export default MovieSearch
