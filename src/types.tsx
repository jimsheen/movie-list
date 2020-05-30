export type AtLeastOne<T> = { [K in keyof T]: Pick<T, K> }[keyof T];

export type SearchDataType = {
	t: string,
	type: string,
	y: string,
	plot: string
};

export type MovieSearchResultsType = {
	Year: string,
	Title: string,
	imdbID: string,
	Type: string,
	Poster: string,
}