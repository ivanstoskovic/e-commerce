import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../COMPONENTS/collection-overview/C_collection_overview.jsx';
import CollectionPage from '../../PAGES/collection/C_collection.jsx';

//ShopPage je ugnezdjena u Route komponentu za rutovanje u App.js i automatski joj proledjuje tri objekta (match, locaton, history) nama treba match sada

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={ CollectionOverview }/>
        <Route path={`${match.path}/:collectionId`} component={ CollectionPage }/>    
    </div>
);

export default ShopPage;