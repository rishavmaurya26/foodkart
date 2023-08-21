import { UserContextProvider } from './contexts/UserContext';
import './App.css';
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login'
import Restaurant from './Pages/Restaurant/Restaurant';
import axios from 'axios'
import { Toaster } from 'react-hot-toast';
// import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <div> 
      <UserContextProvider >
        <Router>
        <Toaster position='top-center' toastOptions={{duration:2000}}/>
        <Routes>
        <Route path="/home"  element={<Home/>}/> 
        <Route path="/"  element={<Login/>}/> 
        <Route path="/register"  element={<Register/>}/> 
        <Route path="/restaurant/:id"  element={<Restaurant/>}/> 
        {/* <Route path="/"  element={<Home/>}/>  */}
      </Routes>
      </Router>
    </UserContextProvider>
    </div>
  );
}

export default App;
