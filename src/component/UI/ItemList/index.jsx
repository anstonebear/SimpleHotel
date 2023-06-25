/* eslint-disable array-callback-return */
import React from 'react'
import { useGetRecipesQuery } from '../../../store/api/api'
import '../ItemList/index.scss'
import Hotel from '../Hotel/index'
import { useFavorites } from '../../../hooks/useFavorites'

const ItemList = () => {
	const { data, isLoading, isSuccess } = useGetRecipesQuery()
	const { favorites } = useFavorites()

	return (
		<div className='itemlist__box'>
			<h1>Добавлено в Избранное: {favorites.length} отеля</h1>
			<div className='itemlist__box-list'>
				<div className='itemlist__box-table'>
					{isLoading
						? 'Loading'
						: isSuccess
						? data.map(item => <Hotel key={item.id} data={item} />)
						: 'error'}
				</div>
			</div>
		</div>
	)
}

export default ItemList
