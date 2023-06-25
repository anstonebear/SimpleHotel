import React from 'react'
import { Breadcrumbs, Link } from '@mui/material'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'

import '../MuiBreadcrumbs/index.scss'

const MuiBreadcrumbs = () => {
	return (
		<div className='muibreadcrumbs__box'>
			<Breadcrumbs
				aria-label='breadcrumbs'
				separator={<ArrowForwardIosOutlinedIcon />}
			>
				<div className='muibreadcrumbs__box-crumbs'>
					<Link href='#' underline='hover' color={'black'}>
						Отели
					</Link>
				</div>
				<div className='muibreadcrumbs__box-crumbs'>
					<Link href='#' underline='hover' color={'black'}>
						Москва
					</Link>
				</div>
			</Breadcrumbs>
			<div className='muibreadcrumbs__box-date'>07 июля 2020</div>
		</div>
	)
}

export default MuiBreadcrumbs
