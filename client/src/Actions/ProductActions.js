//Think this one should work better
// Products actions 


export const getProducts = () => {
    return (dispatch) => {
      // dispatch({ type: "LOADING" })
      console.log(dispatch)
        fetch('http://localhost:3000/baked_items')
        .then(resp => resp.json())
        .then(products => {
          console.log('Products from fetch', products)
          dispatch({ type: "SET_PRODUCTS", products})
        }
        )
    }
  }




// RESTAURANT EXAMPLE: 
    // person orders --> action
    // restaurant server --> dispatch 
    // chef --> reducer (receives action and returns results)

// IN THIS FILE:
// dispatch our 'LOADING' action as soon as the function is invoked. then fetch from our rails API
// next we dispatch the 'FETCH_PRODUCTS' actionand pass along the fetch respons in JSON format as our action payload: 



// older 2019 version
//   export function fetchProducts(){
//     return (dispatch) =>{
//         dispatch({type: 'LOADING})
//         return fetch('http://localhost:3000/baked_items')
//         .then(resp => resp.json())
//         .then(products => dispatch({type: 'FETCH_PRODUCTS', payload: products}))
//     }
// }




// update version below from 2020 medium :
// export function fetchProducts(){
//     return (dispatch) => {
//         fetch('http://localhost:3000/baked_items')
//           .then((res) => res.json())
//           .then((products) => {
//           console.log("prop from fetch:", products)
//           dispatch({ type: 'FETCH_PRODUCTS', payload: products })
//           });
// } }

// 1.  action/action creators: describe the changes we want to make for the globalState
// 2.  dispatch: vehicle for taking actions to the reducer
// 3.  reducer: pure function that takes the description of change to make and uses it to determine what the new state is
// 4.  store: keeps track of all 3 above

