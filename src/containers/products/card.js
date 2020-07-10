import React from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from './thunks';

const MediaCard = props => {
  return (
    <div className="col-sm-6 col-md-4 product">
      <img src={`../assets/img/products/${props.item.image}`} alt="HP Chromebook 11" />

      <div className="content">
        <h1 className="h4">{props.item.name}</h1>
        <p className="price">${props.item.price}</p>
        <p>{props.item.description}</p>
        {/* <label>Laptops</label> */}

        <button className="btn btn-primary btn-rounded btn-sm" onClick={ () => props.onPressAddToCart(props.item) }> <i className="ion-bag"></i> Add to cart</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onPressAddToCart: item => dispatch(addProductToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);