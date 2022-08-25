import { legacy_createStore as createStore } from 'redux'

// createStore takes 2 arguments
// 1: reducer function that will automatically fire later ;)
// 2: initial *global* store


// the reducer function has the state (being the CURRENT STATE)
// and the action object as a parameter

// An action is simply a POJO that tells the reducer what to do next 
// and with what data. ALL ACTIONS MUST HAVE A TYPE KEY.
// Example: {type: counter/multiply}
// Example: {type: user/login, user: data}
const reducer = (state, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        case 'user/login':
            return {...state, currentUser:action.user}
        default:
            return state
    }
}
const store = createStore(reducer, {value: 12, currentUser: null})

export default store;

/*

a store object has 2 functions that we can call on it anywhere

store.dispatch()
-> This accepts a single JS object with at least a type key.
-> and will automatically fire the reducer function intially passed to 
-> the store

store.getState()
-> This is how we read data from the global store.
-> Example: store.getState().theme

*/