import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';
import { addProductToCart } from '../../actions/index';

import Grid from '@material-ui/core/Grid';
 import Card from './card';
 import Header from '../common/header';

class Products extends Component {

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
					<Grid container spacing={1} xs={2}></Grid>
					<Grid container spacing={1} xs={8} classes={{ root: 'content-products' }}>
						{ this.props.products.products != null ? 
							this.props.products.products.map((item) => {
								return (
									<Grid container item xs={12} sm={4} md={4} spacing={3}>
										<Card item={item} addProductToCart={ (item) => this.props.addProductToCart(item) } />
									</Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);