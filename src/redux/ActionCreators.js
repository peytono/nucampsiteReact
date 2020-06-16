import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        /* property: property is no longer required according to ES6 could just be written as property */
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});