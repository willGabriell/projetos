import React from 'react';
import CartButton from '../CartButton/CartButton';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
