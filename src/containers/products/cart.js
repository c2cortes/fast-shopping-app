import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from './actions';
import { addProductToCart } from './actions';
import { setTotal } from './actions';

import CartItem from './cartItem';
import Header from '../common/header';

class Cart extends Component {

	constructor(props) {
		super(props);

		this.state = {
			total: 0,
		}
	}

	setParentTotal(totalParam) {
		this.setState({ total: this.state.total += parseInt(totalParam) })
	}

	componentDidMount() {
		this.props.fetchProducts();
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		let total = 0;

		nextProps.products.cartItems.map((item) => {
			item.product.cant = item.product.cant ? item.product.cant : 1
			total += parseInt(item.product.price * item.product.cant);
		});

		this.setState({ total });
	}

	render() {

		if (this.props.products == null) {
			return (<div>Loading...</div>)
		}

		return (
			<div>
				<Header />
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="panel panel-default">
								<div className="panel-body">
									<div className="checkout-cart">
										<div className="content">
											{this.props.products.cartItems != null ?
												this.props.products.cartItems.map((item, index) => {
													return (
														<CartItem item={item} setParentTotal={(item) => this.props.setTotal(item)} key={index} />
													)
												}) : null
											}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-8 col-md-4">
							<hr className="offset-md visible-sm" />
							<div className="panel panel-default">
								<div className="panel-body">
									<h2 className="no-margin">Summary</h2>
									<hr className="offset-md" />

									<div className="container-fluid">
										<div className="row">
											<div className="col-xs-6">
												<p>Subtotal (7 items)</p>
											</div>
											<div className="col-xs-6">
												<p><b>${this.state.total}</b></p>
											</div>
										</div>
									</div>
									<hr />

									<div className="container-fluid">
										<div className="row">
											<div className="col-xs-6">
												<h3 className="no-margin">Total sum</h3>
											</div>
											<div className="col-xs-6">
												<h3 className="no-margin">${this.state.total}</h3>
											</div>
										</div>
									</div>
									<hr className="offset-md" />
									<Link to={'/checkout'} className="btn btn-primary btn-lg justify">			
										<i className="ion-android-checkbox-outline"></i>&nbsp;&nbsp; Checkout order
									</Link>
									<hr className="offset-md" />

									<p>Pay your order in the most convenient way</p>
									<div className="payment-icons">
										<img src="../assets/img/payments/icon-paypal.svg" alt="paypal" />
										<img src="../assets/img/payments/icon-visa.svg" alt="visa" />
										<img src="../assets/img/payments/icon-mc.svg" alt="mc" />
										<img src="../assets/img/payments/icon-discover.svg" alt="discover" />
										<img src="../assets/img/payments/icon-ae.svg" alt="ae" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchProducts, addProductToCart, setTotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);