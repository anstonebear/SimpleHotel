import React from 'react'
import { useState } from 'react'
import '../Button/index.scss'

const Button = ({ name, type, disabled }) => {
	const [button, setButton] = useState(false)

	return (
		<div>
			<div
				className='button__box'
				onMouseLeave={() => setButton(false)}
				onMouseEnter={() => setButton(true)}
			>
				<button
					className={`button__box-button`}
					type={type}
					disabled={disabled}
				>
					{name}
				</button>
			</div>
		</div>
	)
}

export default Button
