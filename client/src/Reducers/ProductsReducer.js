const initialState = {
    products: [],
    loading: true
  }
const productsReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
          case "LOADING":
            return {
              ...state,
              loading: true
            }
          case "SET_PRODUCTS":
         
            return {

              ...state,
              loading: false,
              products: action.products
            }
          default:
            return state;
        }
  }

  export default productsReducer;
// IN THIS FILE: 
// a reducer is a function who's job is to return the new state
    // takes in the old state and action and returns a new state (new obj that is the updated state)
// the action describes how the reducer should take the old version of state and create a new one 






// export default function ProductsReducer (state={ loading:false,  all: []}, action){
//     switch(action.type){
//         case 'LOADING_PRODUCTS':
//             return{
//                 ...state,
//                 loading: true
//             }
//         case 'FETCH_PRODUCTS':
//             return{
//                 ...state,
//                 loading: false,
//                 all: action.payload
//             }
//         default:
//             return state
//     }
// }



