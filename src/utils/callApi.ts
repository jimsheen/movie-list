import axios from 'axios';

const callApi = ({
  endpoint,
  method = 'get',
  params
}: {
  endpoint: string;
  method ? : 'get';
  params ? : null
}) => {
  // TODO: process.env.NODE_ENV === 'development'
  // query builder
  // mock call
  return axios({
    method,
    url: endpoint,
    data: params
  });
}

export default callApi