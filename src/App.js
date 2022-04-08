import './App.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav  from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from './Resources/Logo.png';

function App() {
  return (
    <div className="App">
      <div className="Banner">
      <>
  <Navbar bg="dark" variant="dark" className='Navbar' >
    <Container  className='UbisoftLibrary'>
      <Navbar.Brand href="#home">
        
        <img className="poza"
          alt=""
          src={Logo}
          width="30"
          height="30"
          
        />{' '}
      Ubisoft Library
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
      </div>
      <p className='Inventory'>
        Inventory
      </p>
      <div className='Buttons'>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" >
    Select Department
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Department_1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Department_2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Department_3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Employee
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Employee_1</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Employee_2</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Employee_3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Button variant="dark" className='Check'>Check Inventory</Button>{' '}

      </div>
    <hr className='Panel'>
    </hr>
    <div className='Buttons'>
      <p className='Inventory'>
        Title
      </p>
      <p className='Inventory'>
        Borrow Date
      </p>
      <Button variant="dark" className='Check'>Return Game</Button>{' '}
    </div>
    <hr className='Panel2'>
    </hr>
    <div className='Buttons'>
    <Button variant="dark" className='Check Game'>Add Game</Button>{' '}
    </div>
    </div>
  );
}
export default App;
