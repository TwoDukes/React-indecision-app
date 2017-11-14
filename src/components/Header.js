import React from 'react';

//Title and subtitle at the top
const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);
Header.defaultProps = {
  title: 'Indecision'
}

export default Header;