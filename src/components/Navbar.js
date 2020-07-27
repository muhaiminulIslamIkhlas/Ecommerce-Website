import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="left">
        <li>
          <a href="">BdExpress</a>
        </li>
      </ul>
      <ul className="right">
        <li>
          <span className="shoppingCart">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </span>
          <span className="cartCount">0</span>
          <a href=""></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
