import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionLoaded } from '../../REDUX/shop/shop-selectors.js';
import WithSpinner from '../../COMPONENTS/with-spinner/C_with_spinner.jsx';//with-spinner/C_with_spinner.jsx';
import CollectionPage from './C_collection.jsx';

//sVE JE ISTO KAO I C_collection_overview_container.jsx sem sto nama sada ovde treba inverzna vrednost
//jer ako je kolekcija ucitana vraca true a posto je vec ucitana ne treba da vrti spinner i setovacemo na false
// ali da bi imali tu vrednost moram da prosledimo state kako zahteva shop-selector tj. selectIsCollectionLoaded
const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
});


//sVE JE ISTO KAO I C_collection_overview_container.jsx samo se prosledjuje CollectionPage
const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage); 

export default CollectionPageContainer;