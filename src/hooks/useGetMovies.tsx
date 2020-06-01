import { useEffect, useState } from 'react';

import callApi from '../utils/callApi/';

import { testMovieResults } from '../utils/testData';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { SearchDataType, MovieSearchResultsType } from '../types';

const API_KEY = process.env.REACT_APP_OMDB_KEY;

const useGetMovies = (searchData: SearchDataType | null) => {
  const initialState = {
    totalResults: '',
    isLoading: false,
    error: false,
  }

  const [movies, setMovies] = useState < MovieSearchResultsType[] | [] > ([]);
  const [state, setState] = useState(initialState);
  const [page, setOffset] = useState(1);

  useBottomScrollListener(() => !state.isLoading ? setOffset(page + 1) : null);

  const fetchMovies = async (mergeArr: boolean) => {

    setState(state => ({ ...state, isLoading: true }));
    try {
      const {
        data: {
          totalResults,
          Search,
        },
      } = await callApi({
        params: {
          page,
          apikey: API_KEY,
          ...searchData,
        },
        mockData: testMovieResults,
      })

      const newMovies = mergeArr ? [...movies, ...Search] : Search;
      setMovies(newMovies);
      setState(state => ({ ...state, totalResults, error: false, isLoading: false }))
    } catch (error) {
      setState(state => ({ ...state, error, isLoading: false }))
    }
  }

  useEffect(() => {
    fetchMovies(true);
  }, [page]);

  useEffect(() => {
    setMovies([]);
    fetchMovies(false);
  }, [searchData])

  return { ...state, movies };
}

export default useGetMovies;
