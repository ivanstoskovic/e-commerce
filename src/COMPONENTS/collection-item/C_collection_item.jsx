import React from 'react';
import CustomButton from '../custom-button/C_custom_button.jsx'
import './C_collection_item.scss';

const CollectionItem = ({id, name, price, imageUrl}) => 
(
    <div className='collection-item' id={id}>
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
        <CustomButton inverted> ADD TO CART </CustomButton>
    </div>    
)

export default CollectionItem;