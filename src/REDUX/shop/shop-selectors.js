import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//Posto smo izmenili shop.data.js podatke iz niza u objekat zbog optimizacije. Obejkat je zapravo key - value par i u pozadini za izvlacenje vrednosti iz objekata je hash mapa
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []//  Sada moramo ovde da izvucemo te podatke tako sto kreiramo niz kljuceva, zatim za svaki kljuc vadimo vrednost iz objekta i smestamo ga u niz koji prosledjujemo komponenti
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    // Dva znaka uzvika su operatur u JavaScriptu koji ispituje 
    //da li se vrednost objekta ili primitivnog tipa razlikuje od inicijalnog npr: 
    //!!0 daje false  zatim !!null daje false zatim prazan string !!'' daje false !!{} prazan objekat daje true
    shop => !!shop.collections // ispituje da li je kolekcija ucitana i vraca true ako jeste. Ako nije collection ce biti null i vraca false
);