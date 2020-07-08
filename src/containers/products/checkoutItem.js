import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

export default function CheckoutItem(props) {
    
    const [total, setTotal] = useState(props.item.product.price);
    const selectChange = (e) => {
        setTotal(e.target.value * props.item.product.price)
        props.item.product.cant = e.target.value;
        props.setParentTotal(props.item.product);
    }

    useEffect(() => {
        //props.setParentTotal(props.item.product.price);
    }, [])
    
    return (
        <Grid container item xs={12} spacing={3} classes={{ root: 'checkout-item-wrapper2' }}>
            <Grid xs={2} classes={{ root: 'checkout-row-wrapper' }}>
                <img
                    src={`/img/${props.item.product.image}`}
                    className="item-cart-image"
                />
            </Grid>
            <Grid xs={4} classes={{ root: 'checkout-row-wrapper' }}>
                {props.item.product.name}
            </Grid>
            <Grid xs={2} classes={{ root: 'checkout-row-wrapper' }}>Unit Price: ${props.item.product.price}</Grid>
            <Grid xs={2} classes={{ root: 'checkout-row-wrapper' }}>
                Qty:
                <select onChange={ (e) => selectChange(e) }>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </Grid>
            <Grid xs={2} classes={{ root: 'checkout-row-wrapper' }}>Valor: ${total}</Grid>
        </Grid>  
    );
}