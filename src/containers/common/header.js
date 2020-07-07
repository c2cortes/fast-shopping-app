import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';

import Grid from '@material-ui/core/Grid';
import { IoIosCart } from 'react-icons/io';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	this.setState({ cartItems: nextProps.products.cartItems.length });
	// 	console
	// }

	render() {

		return (
			<Grid container item xs={12} spacing={3} classes={{ root: 'header-wrapper' }}>
				<Grid container spacing={1} xs={2}></Grid>
				<Grid container spacing={1} xs={8}>
					<Link to={'/'} >			
						<div className="logo-wrapper">
							<img className="main-logo" src="/img/logo.svg"></img>
						</div>
					</Link>
				</Grid>
				<Grid container spacing={1} xs={2}>
					<Link to={'/cart'} className="cart-icon">			
						<IoIosCart size="30px" color="#333" />
						<div className="cant-products-cart">
							{this.props.products.cartItems.length}
						</div>
					</Link>
				</Grid>
			</Grid>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);