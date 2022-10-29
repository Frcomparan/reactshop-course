import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close from '@icons/icon_close.png' 

const OrderItem = (props) => {
	const { removeFromCart } = useContext(AppContext);
	const { product, indexValue } = props;

	const handleRemove = item => {
		removeFromCart(item);
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;
