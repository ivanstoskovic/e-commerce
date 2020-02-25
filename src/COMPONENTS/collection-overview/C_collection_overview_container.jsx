import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../REDUX/shop/shop-selectors.js';
import WithSpinner from '../with-spinner/C_with_spinner.jsx';
import CollectionsOverview from './C_collection_overview.jsx';

//KONTEJNER PATERN 
//Ova komponenta je zapravo refaktoring, odnosno izmestanje logike IZ C_shop.jsx-a 
//tacno tamo gde pripada. Sto nize u hijerarhiji. Nema potrebe da logika da li ce spinner prikazzati 
//stoji u C_shop.jsx vec kreiramo komponentu koja WithSpinner spinner koji wrapuje CollectionOverview
// I smestamo logiku ovoj komponenti da nebi zagadjivali C_shop.jsx nepotrebnim kodom.

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});


//const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview)); 
//Ova naredba je ista kao i zakomentarisana naredba iznad s tim sto je laksa za citanje i omogucava
// da se jos dodatnih komponenti  nadoveze na lanac.
//Ovaj commpose radi tako sto je prvi property stalan i ne menja se a drugi obomtava ono sto ide posle 
//compose-a. U ovom slucaju WithSpinner obmotava (CollectionsOverview). 
//Prdnost je sto na primer kasnije mozemo koristiti CollectionsOverviewContainer uz drugu kompnentu i
//  pisati CollectionsOverviewContainer(NekaDrugaKomponenta)
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview); 

export default CollectionsOverviewContainer;