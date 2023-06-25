import { create } from 'zustand'

export const Hotel = create(set => ({
	Hotels: [],
	fetchOtels: data => set({ Hotels: data })
}))



export const Favorites =create(set =>({
	favorites:[],
	getFavorites:(data) =>set({ favorites:data })
}))
