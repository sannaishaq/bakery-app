import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import { CardActionArea } from '@mui/material';


function Flavors() {

  return (
      <div className="flavors">
    <Grid  container direction="row"
           justifyContent="center"
           alignItems="center">
         <Grid  item xs={1} sm={4} md={4}>
                    <Card sx={{ maxWidth: 400 }} variant="outlined">
                        <CardActionArea>
                            <Typography>
                                <h2 className='flavor-titles'>Cake Flavors</h2>
                                <ul className='ul'> 
                                    <li>Red Velvet</li>
                                    <li>Chocolate</li>
                                    <li>Espresso Mocha</li>
                                    <li>Vanilla Sponge Cake</li>
                                    <li>Marble</li>
                                    <li>Lemon</li>
                                    <li>Coconut Sponge Cake</li>
                                    <li>Almond Vanilla</li>
                                    <li>Pistachio</li>
                                    <li>Cheescake</li>
                                    <li>Vegan Vanilla *</li>
                                    <li>Cinnamon Spice Cake *</li>
                                    <li>* All deluxe fillings are additional $1.50 per serving</li>
                                </ul>
                            </Typography>
                        </CardActionArea>
                    </Card>
             </Grid> 
                 <Grid  item xs={2} sm={4} md={4}>        
                    <Card sx={{ maxWidth: 400 }} variant="outlined">
                        <CardActionArea>
                            <Typography>
                                <h2 className='flavor-titles'>Cake Fillings</h2>
                                <ul className='ul'> 
                                    <li>Vanilla Buttercream</li>
                                    <li>Espresso Mocha Mousse</li>
                                    <li>Chocolate Mousse</li>
                                    <li>Strawberry Compote</li>
                                    <li>Blueberry Compote</li>
                                    <li>Cookies and Cream</li>
                                    <li>Lemon Cheescake Mousse</li>
                                    <li>Cheescake Mousse</li>
                                    <li>Biscoff Cookie Butter Crunch</li>
                                    <li>Whipped Cream with Fresh Fruit *</li>
                                    <li>Apple Brown Sugar *</li>
                                    <li>Pineapple Pistachio *</li>
                                    <li>* All deluxe fillings are additional $1.50 per serving</li>
                                </ul>
                            </Typography>
                        </CardActionArea>
                    </Card>
          </Grid> 
          <Grid  item xs={2} sm={4} md={4} variant="outlined">        
                    <Card sx={{ maxWidth: 400 }}>
                        <CardActionArea>
                                <Typography>
                                    <h2 className='flavor-titles'>Treat Box Options</h2>
                                    <ul className='ul'> 
                                        <li>Macaroons</li>
                                        <li>Specialty Cookies</li>
                                        <li>Stuffed Cookies *</li>
                                        <li>Glitter Cookies</li>
                                        <li>Strawberries</li>
                                        <li>Chocolate Covered Strawberries</li>
                                        <li>Custom Hollow Chocolate Shape *</li>
                                        <li>Cupcakes</li>
                                        <li>Customized Cupcakes</li>
                                        <li>Luster Dust Roses</li>
                                        <li>Custom Name Chocolate *</li>
                                        <li>Custom Dipped Fruit *</li>
                                        <li>* All deluxe options are additional $1.50 per serving</li>
                                    </ul>
                                </Typography>
                        </CardActionArea>
                    </Card>
          </Grid> 
    </Grid> 
    </div>

  )
}

export default Flavors