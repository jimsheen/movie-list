import { useState, useEffect } from 'react';

import callApi from '../utils/callApi/';

const API_KEY = process.env.REACT_APP_OMDB_KEY;

const useClient = ({
	params,
	mockData,
}: {
	params ? : any,
	mockData? : {},
}) => {

	const [response, setResponse] = useState(null);
	const [isLoading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const {
				data,
				status
			} = await callApi({
				endpoint: 'http://www.omdbapi.com',
				params: {
					apikey: API_KEY,
					...params,
				},
				mockData,
			})
			setResponse(data);
			setLoading(false);
			if (status === 200) {} else {
				console.log('status error!');
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [])
	return { response, isLoading };
}

export default useClient