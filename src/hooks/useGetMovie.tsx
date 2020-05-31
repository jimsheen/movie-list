import { useEffect, useState } from 'react';

import { singleMovieResult } from '../utils/testData';
import { SingleMovieResultType } from '../types';

type MockAPICallTypes = {
  data: SingleMovieResultType,
  status: number
}

const mockAPICall = (id: string) => new Promise < MockAPICallTypes > ((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: singleMovieResult,
      status: 200
    })
  }, 200)
});

const useGetMovie = (id: string) => {
  const initialState = {
    isLoading: false,
    error: false,
    movie: {}
  }

  const [state, setState] = useState(initialState);

  const fetchMovie = async (id: string) => {
    setState(state => ({ ...state, isLoading: true }));
    try {
      const {
        data
      } = await mockAPICall(id);

      setState(state => ({ ...state, movie: data, error: false, isLoading: false }))
    } catch (error) {
      setState(state => ({ ...state, error, isLoading: false }))
    }
  }

  useEffect(() => {
    fetchMovie(id);
  }, [id])

  return state;
}

export default useGetMovie
