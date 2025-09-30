
// const { createStore } = require("redux");

const { createStore, applyMiddleware, combineReducers } = require("redux")
const { default: logger } = require("redux-logger")

// //// state

// const initialCounterState = {
//     count: 0
// }

// const initialUserState = {
//   users: ["jamir"],
// };


// //// action 

// const incrimentCounter = () => {
//     return {
//         type: "INCRIMENT",
//     };
// }
// const decrimentCounter = () => {
//     return {
//         type: "DECRIMENT",
//     };
// }
// const resetCounter = () => {
//     return {
//         type: "RESET",
//     };
// }
// const incrimentCounterAcrtion = (value) => {
//     return {
//         type: "INCRIMENT_BY_VALUE",
//         payload: value
//     };
// }


// const addUser = (users) => {
//     return {
//         type: "ADD_USER",
//         payload: users
//     };
// }

// ////create reducer for counter

// const counterReducer = (state = initialCounterState, action) => {
//     switch (action.type) {
//         case "INCRIMENT":
//             return {
//                 ...state,
//                 count: state.count + 1
//             }    
        
//         case "DECRIMENT":
//             return {
//               ...state,
//               count: state.count - 1,
//             }; 

//         case "RESET":
//             return {
//               ...state,
//               count: 0,
//             };  

//         case "INCRIMENT_BY_VALUE":
//             return {
//               ...state,
//               count: state.count + action.payload,
//             };  
    
//         default:
//             state;
//     }
// }

// const userReducer = (state= initialUserState, action) => {
//     switch (action.type) {
//         case "ADD_USER": {
//             return {
//                 users: [...state.users, action.payload],
//                 count: state.count + 2
//             }
//         }
//         default :
//             state
//     }
// }

// //// create store 

// const store = createStore(userReducer   );

// store.subscribe(() => {
//     console.log(store.getState())
// })


// // dispatch action 

// // store.dispatch(incrimentCounter());
// // store.dispatch(incrimentCounter());
// // store.dispatch(resetCounter());
// // store.dispatch(incrimentCounterAcrtion(5));
// // store.dispatch(addUser("mitu"));

////--------------------------------------------------------------

////product constant
// const GET_PRODUCTS = "GET_PRODUCTS"
// const ADD_PRODUCT = "ADD_PRODUCT"
////cart constant
// const GET_CART_ITEMS = "GET_CART_ITEMS";
// const ADD_CART_ITEM = "ADD_CART_ITEM";

////product state
// const initialProductState = {
//     product: ["sugar", "salt"],
//     numberOfProduct: 2
// }
////cart state
// const initialCartState = {
//     cart: ["sugar"],
//     numberOfProduct: 1
// }


////product actions
// const getProducts = () => {
//     return {
//         type: GET_PRODUCTS
//     }
// }
// const addProduct = (product) => {
//     return {
//         type: ADD_PRODUCT,
//         payload: product
//     }
// }

////cart actions
// const getCart = () => {
//     return {
//         type: GET_CART_ITEMS
//     }
// }
// const addCart = (cart) => {
//     return {
//         type: ADD_CART_ITEM,
//         payload: cart
//     }
// }


//// product reducer
// const productReducer = (state = initialProductState, action) => {
//     switch (action.type) {
//         case GET_PRODUCTS:
//             return {
//                 ...state
//             }
//         case ADD_PRODUCT:
//             return {
//                 product : [...state.product, action.payload],
//                 numberOfProduct : state.numberOfProduct + 1
//             }
    
//         default:
//             return state;
//     }
// }

//// cart reducer
// const cartReducer = (state = initialCartState, action) => {
//     switch (action.type) {
//         case GET_CART_ITEMS:
//             return {
//                 ...state
//             }
//         case ADD_CART_ITEM:
//             return {
//                 cart : [...state.cart, action.payload],
//                 numberOfProduct : state.numberOfProduct + 1
//             }
    
//         default:
//             return state;
//     }
// }

////root reducer
// const rootReducer = combineReducers({
//     productR : productReducer,
//     cartR : cartReducer
// })

////store 
// const store = createStore(productReducer, applyMiddleware(logger));
// store.subscribe(() => {
//     console.log(store.getState())
// });

// store.dispatch(getProducts());
// store.dispatch(addProduct("pen"));


////dispatch cart
// store.dispatch(getCart());
// store.dispatch(addCart("pen"));

////-----------------------------------------------------------------------

//// fetching data with redux thunk

//constant
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
const GET_TODOS_FAILED = "GET_TODOS_FAILED"

//state
const initialTodosState = {
    todos : [],
    isLoading : false,
    error : null,
}

//action
const getTodosRequest = () => {
    return {
        type : GET_TODOS_REQUEST
    }
}
const getTodosFailed = (error) => {
    return {
        type : GET_TODOS_REQUEST,
        payload : error
    }
}
const getTodosSuccess = (todos) => {
    return {
        type : GET_TODOS_SUCCESS,
        payload : todos
    }
}

//reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST :
            return {
                ...state,
                isLoading : true,
            }
        case GET_TODOS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                todos : action.payload,
            }
        case GET_TODOS_FAILED :
            return {
                ...state,
                isLoading : false,
                error : action.payload
            }
    
        default:
            return state;
    }
}

//async action creator

//store 
const store = createStore(todosReducer);

store.subscribe(() => {
    console.log(store.getState())
})


