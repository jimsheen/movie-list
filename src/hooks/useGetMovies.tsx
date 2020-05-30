import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { getTopStories } from './util/api';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

import { testMovieResults } from '../utils/testData';

import { SearchDataType, MovieSearchResultsType } from '../types';

const useGetMovies = (searchData: SearchDataType | null) => {

  // Build query from search data

  console.log(searchData);

  const initialState = {
    totalResults: '',
    isLoading: false,
    error: false,
  }

  const [movies, setMovies] = useState < MovieSearchResultsType[] | [] > ([]);

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

  const [state, setState] = useState(initialState);

  const [page, setOffset] = useState(0);

  useBottomScrollListener(() => {
    // update page number on scroll to bottom
    if (!state.isLoading) return setOffset(page + 1)
  });

  const fetchMovies = async (mergeArr: boolean) => {
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
