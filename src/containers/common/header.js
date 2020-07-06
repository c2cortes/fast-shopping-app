import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchProducts } from '../../actions/index';

import Grid from '@material-ui/core/Grid';

class Header extends Component {

	constructor(props){
		super(props);	
		this.state = {}
	}

	componentDidMount(){
	}

	shouldComponentUpdate(nextProps, nextState){
		console.log('nextProps => ', nextProps);
	}

	render(){
    
		return(
				<Grid container item xs={12} spacing={3} classes={{ root: 'header-wrapper' }}>
					<Grid container spacing={1} xs={1}></Grid>
					<Grid container spacing={1} xs={10}>
                        <div className="logo-wrapper">
						    <img className="main-logo" src="/img/logo.svg"></img>
                        </div>
					</Grid>
					<Grid container spacing={1} xs={1}></Grid>
                </Grid>
		)
	}
}

function mapStateToProps(state){
	return {
		products: state.products
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);