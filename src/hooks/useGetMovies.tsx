import { useEffect, useState } from 'react';

import callApi from '../utils/callApi';

import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { testMovieResults } from '../utils/testData';
import { SearchDataType, MovieSearchResultsType } from '../types';

type MockAPICallTypes = {
  data: {
    Search: MovieSearchResultsType[],
    totalResults: string,
  },
  status: number
}

const mockAPICall = (page: number) => new Promise < MockAPICallTypes > ((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: testMovieResults,
      status: 200
    })
  }, 200)
});

const useGetMovies = (searchData: SearchDataType | null) => {
  const initialState = {
    totalResults: '',
    isLoading: false,
    error: false,
  }

  const [movies, setMovies] = useState < MovieSearchResultsType[] | [] > ([]);
  const [state, setState] = useState(initialState);
  const [page, setOffset] = useState(0);

  useBottomScrollListener(() => !state.isLoading ? setOffset(page + 1) : null);

  const fetchMovies = async (mergeArr: boolean) => {

    // const response = await api({ endpoint: query });

    setState(state => ({ ...state, isLoading: true }));
    try {
      const {
        data: {
          totalResults,
          Search,
        },
      } = await mockAPICall(page);

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
