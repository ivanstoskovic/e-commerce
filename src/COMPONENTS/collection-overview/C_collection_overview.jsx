import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/C_collection_preview.jsx';
import { selectCollections } from '../../REDUX/shop/shop-selectors.js';
import './C_collection_overview.scss';

export const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
    {
        collections.map(({id, ...otherCollectionProps}) =>(
        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))    
    }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections 
});

export default connect(mapStateToProps)(CollectionOverview);