import React from 'react'

import '../FormMain/index.scss'

const FormMain = ({ onSubmit, children, title }) => {
	return (
		<div className='form__boxx'>
			<h1 className='form__boxx-title'>{title}</h1>
			<form className='form__boxx-form' onSubmit={onSubmit}>
				{children}
			</form>
		</div>
	)
}

export default FormMain
