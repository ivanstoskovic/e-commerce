import { createSelector } from 'reselect';

// Input selector, mozemo imato vise input selectora
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
