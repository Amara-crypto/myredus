import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeProduct } from "../actions/addAction";
import { addBasket } from "../actions/addAction";
import DeleteIcon from "@material-ui/icons/Delete";

class Cart extends React.Component {
	handleRemove = (item) => {
		this.props.removeProduct({
			id: item.id,
		});
	};

	handleAddQuantity = (name) => {
		this.props.addQuantity(name);
	};

	handleSubtractQuantity = (name) => {
		this.props.subtractQuantity(name);
	};
	render() {
		let addedItems = this.props.items.length;
		let items = this.props.items;
		console.log(addedItems + "UANITY");
		console.log(items);
		return addedItems > 0 ? (
			<div className='container'>
				{items.map((item) => (
					<li className='collection-item avatar' key={item.name}>
						<div className='item-img'>
							<img src={item.image} alt={item.desc} className='' />
						</div>

						<div className='item-desc'>
							<span className='title'>{item.desc}</span>
							<p>{item.desc}</p>
							<p>
								<b>Price: {item.price}$</b>
							</p>
							<p>
								<b>Quantity: {item.quantity}</b>
							</p>
							<Link to='/cart'>
								<i className='material-icons'>arrow_drop_up</i>
							</Link>
							<Link to='/cart'>
								<i className='material-icons'>arrow_drop_down</i>
							</Link>
							<button onclick={this.handleRemove(item)} className='Remove'>
								Remove
							</button>
						</div>
					</li>
				))}
			</div>
		) : (
			<p>Nothing.</p>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		items: state.basketState.products,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addBasket: (item) => dispatch(addBasket(item)),
		removeProduct: (item) => dispatch(removeProduct(item)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
