
import { UserActionTypes } from './user-types.js';

//ACTION koja se trigeruje kao i kog je tipa
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})