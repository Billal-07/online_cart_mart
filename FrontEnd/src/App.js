import SignUp from './Admin/SignUp';
import './App.css';
import Cards from './Components/Cards';
import Carousel from './Components/Carousel/Carousel';
import HomePage from './Pages/HomePage';
import User_SignUp from './User/User_SignUp';
import AddProduct from './products/AddProducts';

function App() {
  return (
    <div className='max-w-full h-screen justify-center '>
      {/* <Carousel /> */}
      {/* <Cards /> */}
      <HomePage />
      {/* <SignUp /> */}
      {/* <User_SignUp /> */}
      {/* <AddProduct />   */}
    </div>    
  );
}

export default App;
