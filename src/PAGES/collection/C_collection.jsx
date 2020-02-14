import React from 'react';
import CollectionItem from '../../COMPONENTS/collection-item/C_collection_item.jsx';
import { connect } from 'react-redux';
import { selectCollection } from '../../REDUX/shop/shop-selectors.js';

import './C_collection.scss';

export const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return(
        <div className='collection-page'>
            <h2 className="title">{ title }</h2>
            <div className="items">
                {
                    items.map(item => (<CollectionItem key={items.id} item = {item}/>))
                }
            </div>

        </div>
    );
};

//ownProps je props komponente koju wrapujemo u connect-u u ovom slucaju match
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state) // selectCollection vraca zapravo  createSelector kome treba celokupan state jer nakon toga treba da izvuce deo state-a na osnovu URL-a
});

export default connect(mapStateToProps)(CollectionPage);