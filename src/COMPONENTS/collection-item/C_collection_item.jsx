import React from 'react';
import CustomButton from '../custom-button/C_custom_button.jsx';
import { connect } from 'react-redux';
import { addItem } from '../../REDUX/cart/cart-action.js'
import './C_collection_item.scss';

const CollectionItem = ({item, addItem, width}) => 
{
    const { id, name, price, imageUrl } = item;
    return(
    <div className={`${width ? "" : "item-width" } collection-item`} id={id}>
        <div 
            className='image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />

        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        <CustomButton onClick={()=>addItem(item)} inverted> ADD TO CART </CustomButton>
    </div>    
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);