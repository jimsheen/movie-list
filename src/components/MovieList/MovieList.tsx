import React from 'react';

type ISearchData = {
	t: string,
}

type MovieListProps = {
	searchData: any
}

const MovieList: React.FC <MovieListProps> = ({ searchData }) => {
	return (<div>test</div>);
}

export default MovieList;