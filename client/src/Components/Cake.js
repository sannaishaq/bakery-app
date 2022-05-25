import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel'


function Cake() {
 

  return (
    <>
      
      <div id="cakecarousel" >
              <Carousel variant="light" fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1651764222/Cakes/IMG_7504_ma3bmb.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Theme Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653503821/Cakes/IMG_7853_oct9sx.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502430/Cakes/IMG_6251_ywyksc.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Theme Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502436/Cakes/IMG_6288_i1b5dn.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502436/Cakes/IMG_6288_i1b5dn.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653502453/Cakes/IMG_5897_pmuuac.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Custom Birthday Cake</h5>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
      </div>
    </>
  )
}

export default Cake
{/* <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="500"
                    image="https://res.cloudinary.com/djbbs3mk3/image/upload/v1653497631/Cakes/IMG_8026_xrwueg.jpg"
                    alt="bridal shower cake"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Custom Cakes
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
        </Card>
           <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="500"
                    image="https://res.cloudinary.com/djbbs3mk3/image/upload/v1651764222/Cakes/IMG_7504_ma3bmb.jpg"
                    alt="bridal shower cake"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Custom Cakes
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                </CardActions>
        </Card> */}
  