import React from 'react'

import '../Options/index.scss'

const Options = () => {
	return (
		<div className='options_box'>
			<select className='options_box-rating'>
				<option disabled selected>
					Рейтинг
				</option>
				<option value='rating1'>От большего к меньшему</option>
				<option value='rating2'>От меньшего к большему</option>
			</select>
			<select className='options_box-price'>
				<option disabled selected>
					Цена
				</option>
				<option value='price1'>От большего к меньшему</option>
				<option value='price2'>От меньшего к большему</option>
			</select>
		</div>
	)
}

export default Options
