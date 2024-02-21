// Define the action increment and decrement using redux without react and increase the count value by 5 and decrease the count value by 3.

const {createStore} = require('redux')
// we are creating the store to save all the state value of the application


// reducer function
const counterReducer = (state = {count:0},action)=>{
    // reducer function take the 2 arguments initial state value and type of action 
    switch(action.type){ 
        //actions are always in capital letter
        case 'INCREMENT': 
        return {count: state.count+5}

        case 'DECREMENT': 
        return {count: state.count-3}

        default:
            return state
    }
}

const store = createStore(counterReducer)
// store object act as the global object which will save all the state value is stored..


// subscribe to state change
store.subscribe(()=>{
    console.log('current State:',store.getState());
})

// Dispatch actions
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})

