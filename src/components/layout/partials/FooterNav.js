import React from 'react';
import classNames from 'classnames';
// import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="tel:+16027996086">Phone Number 602-799-6086</a>
        </li>
        <li>
          <a href="https://goo.gl/maps/aybpSTSjEqoPu2HD8" target="_blank" rel="noopener noreferrer" >Address 5508 W. Michelle Dr Glendale AZ 85308</a>
        </li>
        {/* <li>
          <Link to="#0">Email</Link>
        </li>
        <li>
          <Link to="#0">IDK</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default FooterNav;