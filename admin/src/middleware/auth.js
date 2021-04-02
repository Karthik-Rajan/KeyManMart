// import React from 'react';
// import { useHistory } from "react-router-dom";
// import { checkLogin } from '../actions/authAction';

export const Auth = (store) => (next) => (action) => {
    localStorage.setItem('auth', false);
    let login = store.getState();
    console.log(login.auth.loggedIn);
    if (login.auth.loggedIn) {
        next(action);
    }
    
    console.log('in');

    // store.dispatch(checkLogin());
    // let login =  store.getState();
    // if(login.auth.loggedIn == 'false' ) {
    //   history.push('/login');
    // } 
    // next(action);
}
