import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

function NavBar() {
  // const [user,SetUser] = useState({})
  var {user} = useContext(UserContext)
  // SetUser(temp)
  // if(!user)
  // {
  //   var temps = window.localStorage.getItem('MY_APP_STATE');
  //   // SetUser(JSON.parse(temps))
  //   user  = temps
  // }
  // else
  // {
  //   window.localStorage.setItem('MY_APP_STATE', JSON.stringify(user));
  // }
  var name=null;
  if(user)
  name = user.name.split(' ')[0]
  console.log(name)
  return (
    <>
      <Navbar bg="dark" className='Navbar' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FoodKart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link href="#pricing" disabled>About</Nav.Link>
          </Nav>
          <Nav>
           {!!name && <span className='text-light'>Hi {name}</span>}
          </Nav>
        </Container>
      </Navbar>
     
      </>
  );
}

export default NavBar;