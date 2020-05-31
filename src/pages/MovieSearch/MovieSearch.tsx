import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Flex, Box } from 'rebass';

import { Animated } from 'react-animated-css';

import SearchBar from '../../components/SearchBar';
import MovieList from '../../components/MovieList';

import { LayoutContainer } from '../../layout';

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
						<SearchBar handleSubmit={handleSubmit} isSearching={isSearching} />
						<Box>
							<Link to="/favourites">
								<p>{`My favourites <3`}</p>
							</Link>
						</Box>
					</Animated>
				</Box>
			</Flex>
			{isMovieListActive &&
				<Box width={1}>
					<MovieList searchData={searchData} />
				</Box>
			}
		</React.Fragment>
	)
}

export default MovieSearch
