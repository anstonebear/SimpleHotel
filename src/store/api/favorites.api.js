import { api } from './api'

export const favoritesApi = api.injectEndpoints({
	endpoints: builder => ({
		getAll: builder.query({
			query: () => ''
		})
	})
})


