import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadProducts } from './thunks';

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

	UNSAFE_componentWillReceiveProps(nextProps){
		
	}

	render(){
		
		if(!this.props.products.products){
			return(<div>There is not connection to the server...</div>)
        }
		
		return(
			<div>
				<Header />
				<div className="container">		
					<div className="row">
						<div className="col-sm-12 products">
							{ this.props.products.products.products != null ? 
								this.props.products.products.products.map((item) => {
									return <Card item={item} key={item.id} />
								}) : null
							}
						</div>		
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	products: state.products,
})

const mapDispatchToProps = dispatch => ({
	fetchProducts: () => dispatch(loadProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);