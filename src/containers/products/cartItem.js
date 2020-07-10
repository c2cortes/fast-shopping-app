import React from 'react';

export default function CartItem(props) {

    const selectChange = (e) => {
        props.item.product.cant = e.target.value;
        props.setParentTotal(props.item.product);
    }

    return (
        <div className="media">
            <div className="media-left">
                <img className="media-object" src={`../assets/img/products/${props.item.product.image}`} alt="HP Chromebook 11" />
            </div>
            <div className="media-body">
                <h2 className="h4 media-heading">{props.item.product.name}</h2>
                {/* <label>Laptops</label> */}
                <p className="price">${props.item.product.price}</p>
            </div>
            <div className="controls">
                <span className="input-group-btn">
                    Qty:
                </span>
                <select onChange={ (e) => selectChange(e) }>
                     <option value='1'>1</option>
                     <option value='2'>2</option>
                     <option value='3'>3</option>
                     <option value='4'>4</option>
                     <option value='5'>5</option>
                 </select>
            </div>
        </div>
    );
}