import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts, setSummaryTotal } from './thunks';
import CartItem from './cartItem';
import Header from '../common/header';
import CartSummary from './cartSummary';

class Cart extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {

		if (this.props.products == null) {
			return (<div>Loading...</div>)
		}

		return (
			<div>
				<Header />
				<div className="container">
					<div className="box">
                        <div className="container">
                            <h1>Cart</h1>
                        </div>
                    </div>
                    <hr className="offset-md"></hr>
					<div className="row">
						<div className="col-md-8">
							<div className="panel panel-default">
								<div className="panel-body">
									<div className="checkout-cart">
										<div className="content">
											{this.props.products.cartItems != null ?
												this.props.products.cartItems.map((item, index) => {
													return (
														<CartItem item={item} key={index} />
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
							<CartSummary/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { products: state.products }
}

const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(loadProducts()),
	onSetTotal: (total) => dispatch(setSummaryTotal(total))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);