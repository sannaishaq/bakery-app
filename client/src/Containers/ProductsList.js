import {getProducts} from '../Actions/ProductActions'
import Products from '../Components/Products' 
import {useSelector, useDispatch }from 'react-redux'
import {useEffect} from 'react'


const ProductsList = () => {
//  any time an action is dispatched, it will call its selector function again right away.
//  If the value returned by the selector changed from the last time it ran, 
// useSelector will force our component to re-render with the new data
// ****useSelector replaces connect
  // const products = []
  const dispatch = useDispatch() 
  useEffect(()=>{dispatch(getProducts())}, [dispatch])
  
  const selectProducts = useSelector(state => state.products.products)
  // dispatch()

  console.log(selectProducts)
  // since `products` is an array, we can loop over it
  const renderedProductsListItems = selectProducts.map (products => {
    return <Products key={products.id} products={products} />
  })

   return <ul>{renderedProductsListItems}</ul>
}


// This function should be passed as the first argument to connect, and will be called every time when the Redux store state changes.
// The first argument to a mapStateToProps function is the entire Redux store state (the same value returned by a call to store.getState())



export default ProductsList