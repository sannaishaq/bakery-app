import React from 'react'
import {Link} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@material-ui/core/Grid';


function OrderForm() {

  return (
      <>
          <div className="ordercards">
            <Grid container spacing={3}>
            <Grid item xs>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="500"
                            image="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653497631/Cakes/IMG_8026_xrwueg.jpg"
                            alt="birthday cake"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Custom Cakes
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Link to={'/cakeorderform'}>
                            <Button size="small" color="primary">
                            Order
                            </Button>  
                        </Link>            
                        </CardActions>
                  </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="500"
                              image="https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763069/Cakes/IMG-5065_azjbyr.jpg"
                              alt="cupcakes"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Cupcakes
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Link to={'/cupcakeorderform'}>
                                <Button size="small" color="primary">
                                  Order
                                </Button >
                            </Link>
                          </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="500"
                              image="https://res.cloudinary.com/djbbs3mk3/image/upload/v1651763023/Cakes/IMG-0451_waiyyn.jpg"
                              alt="cupcakes"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Treat Boxes
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Link to={'/treatboxorderform'}>
                                <Button size="small" color="primary">
                                  Order
                                </Button>
                            </Link>
                          </CardActions>
                    </Card>
                </Grid>  
                <Grid item xs> 
                    <Card sx={{ maxWidth: 345 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="500"
                              image="https://i.pinimg.com/236x/55/a5/79/55a5792c81cdaa371a549d45343296d9--pixel-photography-food-deserts-photography.jpg"
                              alt="cupcakes"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Dessert Shooters
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Link to={'/dessertshootersorderform'}>
                              <Button size="small" color="primary" >
                                Order
                              </Button>
                            </Link>
                          </CardActions>
                    </Card>
                </Grid> 
          </Grid>
        </div>
    </>

  )
}

export default OrderForm