import React from 'react'
import { useActions } from '../../../hooks/useActions'
import { useFavorites } from '../../../hooks/useFavorites'
import hart from '../../../assets/hart'
import redhart from '../../../assets/redhart'
import icon from '../../../assets/icon'

import './index.scss'

const Hotel = ({ data }) => {
	const { favorites } = useFavorites()
	const isExist = favorites.some(r => r.id === data.id)

	const { toggleFavorites } = useActions()

	return (
		<div className='list__box'>
			<div className='list__box-desc'>
				<div className='list__box-icon'>
					<img src={icon} alt='icon' className='img' />
				</div>
				<div className='list__box-name'>
					<span>{data.name}</span>
					<span>{data.date}</span>
					<span>{data.rating}</span>
				</div>
			</div>

			<div className='list__box-table'>
				<div className='list__box-price'>
					<span>{data.price}</span>
				</div>
				<button onClick={() => toggleFavorites(data)}>
					{isExist ? (
						<img src={redhart} alt='delet favorits' />
					) : (
						<img src={hart} alt='add favorits' />
					)}
				</button>
			</div>
		</div>
	)
}

export default Hotel
