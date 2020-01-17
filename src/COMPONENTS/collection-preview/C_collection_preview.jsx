import React from 'react';

import CollectionItem from '../collection-item/C_collection_item.jsx';

import './C_collection_preview.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>{
            items
            .filter((item, idx) => idx < 4 )/**Posto je ovo preview kolekcija filtriramo je do 4 elemenata */
            .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps}/>))
        }
        </div>
    </div>
);

export default CollectionPreview;