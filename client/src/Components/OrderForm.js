import React from 'react'
// import { googleFormsToJson } from 'react-google-forms-hooks'
// import { GoogleFormProvider, useGoogleForm} from 'react-google-forms-hooks'
// import form from './form.json'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function OrderForm() {
// const result =  googleFormsToJson('https://forms.gle/Gab894Nz3D5PBPy57')
//       console.log(result.fields)
//  const methods = useGoogleForm({ form })
//  const onSubmit =  (data) => {
//         methods.submitToGoogleForms(data)
//       }

  return (
      <>
            <div>OrderForm</div>
            <Card sx={{ maxWidth: 345 }}>
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
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>
          </Card>
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
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>
          </Card>
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
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>
          </Card>
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
                  <Button size="small" color="primary">
                    Order
                  </Button>
                </CardActions>
          </Card>


          
            {/* <GoogleFormProvider {...methods}>
                <Form onSubmit={methods.handleSubmit(onSubmit)}>
                    <ShortAnswerInput id='1864908950' />
                    <button type='submit'>Submit Order</button>
                </Form>
            </GoogleFormProvider> */}
    </>

  )
}

export default OrderForm