
const { createStore } = require("redux");

// state

const initialCounterState = {
    count: 0
}

const initialUserState = {
  users: ["jamir"],
};


// action 

const incrimentCounter = () => {
    return {
        type: "INCRIMENT",
    };
}
const decrimentCounter = () => {
    return {
        type: "DECRIMENT",
    };
}
const resetCounter = () => {
    return {
        type: "RESET",
    };
}
const incrimentCounterAcrtion = (value) => {
    return {
        type: "INCRIMENT_BY_VALUE",
        payload: value
    };
}


const addUser = (users) => {
    return {
        type: "ADD_USER",
        payload: users
    };
}

//create reducer for counter

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case "INCRIMENT":
            return {
                ...state,
                count: state.count + 1
            }    
        
        case "DECRIMENT":
            return {
              ...state,
              count: state.count - 1,
            }; 

        case "RESET":
            return {
              ...state,
              count: 0,
            };  

        case "INCRIMENT_BY_VALUE":
            return {
              ...state,
              count: state.count + action.payload,
            };  
    
        default:
            state;
    }
}

const userReducer = (state= initialUserState, action) => {
    switch (action.type) {
        case "ADD_USER": {
            return {
                users: [...state.users, action.payload],
                count: state.count + 2
            }
        }
        default :
            state
    }
}

// create store 

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState())
})


// dispatch action 

// store.dispatch(incrimentCounter());
// store.dispatch(incrimentCounter());
// store.dispatch(resetCounter());
// store.dispatch(incrimentCounterAcrtion(5));
store.dispatch(addUser("mitu"));

