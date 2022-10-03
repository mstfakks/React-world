import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Media
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='mw-100'>
      <Navbar expand="md" className='w-100 mb-5 shadow rounded'>
        <img src='data:image/png;base64,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' width={50} height={50} />
        <NavbarBrand><Link to="/" className='text-secondary text-uppercase px-5'>SouthWind Shopping</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <CartSummary/>
            <NavItem >
              <NavLink><Link to="/saveproduct" className='text-secondary px-3'>New Product</Link></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;