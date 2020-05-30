import React from 'react';

type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

type SearchDataType = {
	t: string,
	type: string,
	y: string,
	plot: string
};

type MovieListContainerProps = {
	searchData: AtLeastOne<SearchDataType>
}

const MovieListContainer: React.FC<MovieListContainerProps> = ({ searchData }) => {

	console.log(searchData);

	return null
}

export default MovieListContainer;