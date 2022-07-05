import './App.css';
import Cupcake from './Components/Cupcake';
import Cake from './Components/Cake';
import TreatBox from './Components/TreatBox';
import DessertShooters from './Components/DessertShooters';
import Navigation from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Reviews from './Components/Reviews';
import ProductsList  from './Containers/ProductsList';
import OrderForm from './Components/OrderForm';
import CakeForm from './Components/CakeForm';
import CupcakeForm from './Components/CupcakeForm';
import TreatBoxForm from './Components/TreatBoxForm';
import DessetShooterForm from './Components/DessertShooterForm';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
     <>     
          <Navigation/>
          <Routes>   
            <Route path='/' element={<Home/>}/>  
            <Route path='/products' element={<ProductsList/>}/>
             <Route path='/cupcakes' element={<Cupcake/>}/>  
             <Route path='/treatboxes' element={< TreatBox/>}/>               
             <Route path='/customcakes' element={<Cake />}/> 
             <Route path='/dessertshooters' element={<DessertShooters/>}/>    
             <Route path='/reviews' element={<Reviews/>}/>   
             <Route path='/about' element={<About/>}/>   
             <Route path='/contactus' element={<Contact/>}/> 
             <Route path='/placeorder' element={<OrderForm />}/> 
             <Route path='/cakeorderform' element={<CakeForm/>}/>
             <Route path='/cupcakeorderform' element={<CupcakeForm/>}/>
             <Route path='/treatboxorderform' element={<TreatBoxForm/>}/>
             <Route path='/dessertshootersorderform' element={<DessetShooterForm/>}/>
          </Routes>
          <Footer />
         
    </>
    </div>
  );
}

export default App;
