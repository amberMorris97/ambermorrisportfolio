import React from 'react';

const Header = () => {
  const headerElements = ['home', 'work experience', 'projects', 'links']

  return (
    <div className="header">
      <ul>
        {headerElements.map((title) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Header;