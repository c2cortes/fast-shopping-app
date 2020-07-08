import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';
import { addProductToCart } from '../../actions/index';
import { setTotal } from '../../actions/index';

import Grid from '@material-ui/core/Grid';
 import CheckoutItem from './checkoutItem';
 import Header from '../common/header';

class Cart extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			total: 0,
		}
	}

	setParentTotal(totalParam){
		this.setState({ total: this.state.total += parseInt(totalParam) })
	}

	componentDidMount(){
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

	render(){
		
		if(this.props.products == null){
			return(<div>Loading...</div>)
        }
    
		return(
			<div className="main-container">
				<Grid container item xs={12} spacing={3}>
					<Grid container spacing={1} xs={12}>
						<Header />
					</Grid>
                        
                        <Grid container item xs={12} spacing={3}>
                            <Grid container spacing={1} xs={2}></Grid>
                            <Grid container spacing={1} xs={8}>
                                <h2 className="section-title">Shopping Cart</h2>
                            </Grid>
                            <Grid container spacing={1} xs={2}></Grid>
                        </Grid>
                        
					<Grid container spacing={1} xs={2}></Grid>
					<Grid container spacing={1} xs={8} classes={{ root: 'content-products' }}>
						{ this.props.products.cartItems != null ? 
							this.props.products.cartItems.map((item) => {
								return (
									<CheckoutItem item={item} setParentTotal={ (item) => this.props.setTotal(item) }/>
								)
							}) : null
						}
						<Grid container item xs={12} spacing={3} classes={{ root: 'checkout-item-total' }}>
							<Grid xs={10}></Grid>
							<Grid xs={2}>Total: ${this.state.total}</Grid>
						</Grid>  
					</Grid>
					<Grid container spacing={1} xs={2}></Grid>
                </Grid>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchProducts, addProductToCart, setTotal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);