import React from 'react'
import { useFavorites } from '../../../hooks/useFavorites'
import './index.scss'
import icon from '../../../assets/icon'
import redhart from '../../../assets/redhart'

import { useActions } from '../../../hooks/useActions'

const FavoritesList = () => {
	const { favorites } = useFavorites()
	const { toggleFavorites } = useActions()
	console.log(favorites)
	return (
		<div className='favoritelist__box'>
			{favorites.map(item => (
				<div className='favoritelist__box-list'>
					<div className='favoritelist__box-descr'>
						<span>{item.name}</span>
						<span>{item.date}</span>
						<span>{item.rating}</span>
					</div>
					<div className='favoritelist__box-delet'>
						<span className='favoritelist__box-price'>{item.price}</span>
						<button onClick={() => toggleFavorites(item)}>
							<img src={redhart} alt='delet favorits' />
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default FavoritesList
