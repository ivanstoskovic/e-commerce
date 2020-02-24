import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../COMPONENTS/collection-overview/C_collection_overview.jsx';
import CollectionPage from '../../PAGES/collection/C_collection.jsx';
import { firestore, convertCollectionsSnapshotToMap } from '../../FIREBASE/firebase.utils.js';
import { connect } from 'react-redux';
import { updateCollections } from '../../REDUX/shop/shop-actions.js'


//ShopPage je ugnezdjena u Route komponentu za rutovanje u App.js i automatski joj proledjuje tri objekta (match, locaton, history) nama treba match sada

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections'); // referenca na collection listu u firestor bazi podataka
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
        });

    }

    render(){
        const { match } = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={ CollectionOverview }/>
                <Route path={`${match.path}/:collectionId`} component={ CollectionPage }/>    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);