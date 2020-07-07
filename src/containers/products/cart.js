import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';
import { addProductToCart } from '../../actions/index';

import Grid from '@material-ui/core/Grid';
 import CheckoutItem from './checkoutItem';
 import Header from '../common/header';

class Cart extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			projectsListContainer: '',
		}
	}

	onSuccessStored(){
		this.hideTodoFormComponent();
	}

	componentDidMount(){
		this.props.fetchProducts();
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
									<CheckoutItem item={item}/>
								)
							}) : null
						}
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
	return bindActionCreators({ fetchProducts, addProductToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);