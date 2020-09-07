import React from "react";
import smartphones from "../images/sim-negro.jpg";
import smartphones1 from "../images/s20.jpg";

import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const items = [
	{ name: "Samsung", price: 480, desc: "samsung s10", image: smartphones },
	{ name: "Nokia", price: 530, desc: "Nokia N80", image: smartphones1 },
	{ name: "Iphone", price: 400, desc: "Iphone X", image: smartphones1 },
	{ name: "OnePlus", price: 350, desc: "sOnePlues 5", image: smartphones },
];

/* const Home = () => {
     C
 }*/
class Home extends React.Component {
	// eslint-disable-next-line no-useless-constructor

	handleClick = (product) => {
		console.log("Added ");
		this.props.addPoduct(product);
	};
	render() {
		return (
			<div className='container'>
				{items.map((item) => (
					<div className='image'>
						<img src={item.image} alt={item.name} />
						<h3>{item.name}</h3>
						<h3>{item.price}</h3>
						<a
							onClick={() => this.handleClick(item)}
							className='addToCart cart1'
							href='#'
						>
							Add me to Cart
						</a>
					</div>
				))}
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addPoduct: (product) => dispatch(addBasket(product)),
	};
};

const mapStateToProps = (state) => ({
	basketCount: state.basketState.basketNumbers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
