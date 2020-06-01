import axios from 'axios';

import queryBuilder from '../queryBuilder.js';

type MockAPICallTypes = {
  data: any,
  status: number
}

const mockAPICall = (mockData: any) => new Promise < MockAPICallTypes > ((resolve, reject) => {
  setTimeout(() => {
    resolve({
      data: mockData,
      status: 200
    })
  }, 200)
});


const callApi = async ({
  endpoint = 'https://www.omdbapi.com',
  params,
  mockData,
}: {
  endpoint ?: string;
  params ? : any,
  mockData? : null | {},
}) => {

  const queryString = params ? queryBuilder(params) : '';

  // dev flag for testing mock data
  const isDev = false;
  
  // if test env or mockdata exists use mockAPICAll
  if (process.env.NODE_ENV === 'test' || isDev) return mockAPICall(mockData);
  // else use axios

  return axios.get(`${endpoint}${queryString}`);
}

export default callApi