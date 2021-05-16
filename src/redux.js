import React from 'react';
import {createStore} from 'redux';

/*

reddit data
fav subs
subreddit

*/

const subInitialState = 'hondacivic';

//ACTION
const getSub = () => {
    return{
        type: 'GET-SUBREDDIT'
    }
}



//REDUCER
const subreddit = (subInitialState, action) => {
    switch(action.type){
        case 'GET-SUBREDDIT':
            return;
        case 'CHANGE-SUBREDDIT':
            return;
    }

}




//STORE
let store = createStore(reducer);

//DISPATCH




