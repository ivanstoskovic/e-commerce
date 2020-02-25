import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverviewContainer from '../../COMPONENTS/collection-overview/C_collection_overview_container.jsx';
import CollectionPageContainer from '../../PAGES/collection/C_collection_container.jsx';

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../REDUX/shop/shop-actions.js';

//import { firestore, convertCollectionsSnapshotToMap } from '../../FIREBASE/firebase.utils.js';
//import CollectionOverview from '../../COMPONENTS/collection-overview/C_collection_overview.jsx';
//import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../REDUX/shop/shop-selectors.js';
//import WithSpinner from '../../COMPONENTS/with-spinner/C_with_spinner';
//import { createStructuredSelector } from 'reselect';


// Umotavamo komponente u spinner loader 
//const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
//const CollectionPagewWithSpinner = WithSpinner(CollectionPage);


//ShopPage je ugnezdjena u Route komponentu za rutovanje u App.js i automatski joj proledjuje tri objekta (match, locaton, history) nama treba match sada

class ShopPage extends React.Component{
    // state = {
    //     loading: true
    // }
    
    // unsubscribeFromSnapshot = null;

    componentDidMount(){
        const { fetchCollectionsStartAsync } = this.props;// props sadrze funkciju jer smo je connectovali sa komponentom i connect funkcijom
        fetchCollectionsStartAsync();

        //const { updateCollections } = this.props;
        //const collectionRef = firestore.collection('collections'); // referenca na collection listu u firestor bazi podataka
        
        //koriscenjem firebejz biblioteke
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot( async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({ loading: false });
        // });

    }

    render(){
        const { match, /*isCollectionFetching,*/ isCollectionLoaded} = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} 
                    component={CollectionsOverviewContainer}/>
                {/* <Route exact path={`${match.path}`} 
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}/> */}
                <Route path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}/>   
            </div>
        )
    }
}

// const mapStateToProps = createStructuredSelector({
//     //isCollectionFetching: selectIsCollectionFetching,
//     isCollectionLoaded: selectIsCollectionLoaded
// });

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
    //updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null,mapDispatchToProps)(ShopPage);