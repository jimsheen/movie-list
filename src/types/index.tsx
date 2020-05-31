export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

export type SearchDataType = {
	t: string,
	type: string,
	y: string,
	plot: string,
};

export interface MovieSearchResultsType {
	Year: string,
	Title: string,
	imdbID: string,
	Type: string,
	Poster: string,
}

export type RatingsType = {
	Source: string,
	Value: string,
}

export interface SingleMovieResultType extends MovieSearchResultsType {
	Released: string,
	Runtime: string,
	Genre: string,
	Director: string,
	Writer: string,
	Actors: string,
	Plot: string,
	Language: string,
	Country: string,
	Awards: string,
	Poster: string,
	Ratings: RatingsType[],
	Metascore: string,
	imdbRating: string,
	Type: string,
	DVD: string,
	BoxOffice: string,
	Production: string,
	Website: string,
	Response: string,
}