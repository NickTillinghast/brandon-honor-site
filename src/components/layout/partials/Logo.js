import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand-container ',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <div className='logo  '>
        <Link to="/">
          <Image
            src={require('./../../../assets/images/verticalbanner-01.png')}
            alt="Open"
            width={300}
            heigth={400}
            height={1100} />
        </Link>
      </div>
    </div>
  );
}

export default Logo;