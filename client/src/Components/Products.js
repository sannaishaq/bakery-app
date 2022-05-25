import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))

function Products({products}) {
const classes = useStyles()

  return (
    
    <div className={classes.root}>
      
      {/* <h3>{products.item_type}</h3>
      <h4>{products.event_type}</h4>
      <img src={products.image_url}></img>
     */}
     <Grid container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start">
          <Grid item xs={12} sm={6} md={3} >
                <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="700"
                    src={products.image_url}
                    alt={products.item_type}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {products.item_type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {products.event_type}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </Grid>
    </Grid>

    </div>
  )
}

export default Products










// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import { CardActionArea, Typography } from '@material-ui/core';


// const showPageRoute = () => {
//   let path = 'http://localhost:3000/baked_items'
// history.push(path)
// }
  // 
// <Grid item xs={12} md={4}>
//         <CardActionArea onClick={showPageRoute} >
//           <Card container elevation={5}>
//             <CardHeader 
//               title={
//                 <Typography variant="h4" color="primary" align="center">{item_type}</Typography>
//               }
//             />
//             <CardContent>
//               <Typography color="primary" align="center">
//                 { event_type}
//               </Typography>
        
//             </CardContent>      
//           </Card>
//         </CardActionArea>
//       </Grid>
    