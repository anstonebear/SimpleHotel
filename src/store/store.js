import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer } from './Slice/Favorites'
import { api } from './api/api'
import { createLogger } from 'redux-logger'

const logger = createLogger({
	collapsed: true
})

const reducers = combineReducers({
	favorites: reducer,
	[api.reducerPath]: api.reducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware).concat(logger)
})

