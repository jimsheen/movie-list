import callApi from './';


it('should return mock data', async () => {

	const mockData = {
		postId: 'testID'
	}

	expect(await callApi({
		endpoint: '',
		params: { id: 'testID' },
		mockData
	})).toMatchObject({
		data: mockData,
		status: 200,
	})
})
