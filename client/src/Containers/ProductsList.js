import {getProducts} from '../Actions/ProductActions'
import {useSelector, useDispatch }from 'react-redux'
import {useEffect} from 'react'
import Flavors from '../Components/Flavors'
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const ProductsList = () => {
//  any time an action is dispatched, it will call its selector function again right away.
//  If the value returned by the selector changed from the last time it ran, 
// useSelector will force our component to re-render with the new data
  const dispatch = useDispatch() 
  useEffect(()=>{dispatch(getProducts())}, [dispatch])
  
  // useSelector replaces connect function 
  const selectProducts = useSelector(state => state.products.products)
  console.log("mapped products" ,  selectProducts)
  
   return (
   <>
        <Flavors />
    <div className='products'>
     <h2 className='product-title'>Product Gallery</h2>
        <Grid container spacing={3}>
            {selectProducts.map(products => (
               <Grid item xs={2} sm={4} md={4}>
                         <Card sx={{ maxWidth: 400 }}>
                           <CardActionArea>
                             <CardMedia
                               component="img"
                               height="700"
                               src={products.image_url}
                               alt={products.item_type}
                             />
                             <CardContent>
                               <Typography variant="h5" color="text.secondary">
                               {products.event_type}
                               </Typography>
                             </CardContent>
                           </CardActionArea>
                       </Card>
             </Grid>
            ))}
          </Grid>
      </div>
        
   </>
   )
}


export default ProductsList