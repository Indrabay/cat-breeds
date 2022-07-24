import React, { Component } from 'react'
import './MainList.css'

export default class MainList extends Component {

	render() {
		const itemList = this.props.breeds.map((item) =>
			<div className='card' key={item.id}>
				<div className='card_img'>
					<img src={item.image.url} alt={item.id} />
				</div>
				<div className='card_body'>
					<p>{item.origin}</p>
					<h2>{item.name}</h2>
				</div>
			</div>
		)
		return (
			<div className='main_list'>
				{itemList}
			</div>
		)
	}
}
