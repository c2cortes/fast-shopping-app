import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProducts } from '../products/thunks';
import { IoIosCart } from 'react-icons/io';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="./"> <i className="ion-cube"></i> Unistore</a>
					</div>

					<div id="navbar" className="navbar-collapse collapse">
						<ul className="nav navbar-nav">
							<li><a href="../">Home</a></li>
							<li><a href="../catalog/">Catalog</a></li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={'/cart'} className="cart-icon">			
									<IoIosCart size="30px" color="#333"/>
									<div className="cant-products-cart">
										{this.props.products.cartItems.length}
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

const mapStateToProps = state => ({
	products: state.products,
})

const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);