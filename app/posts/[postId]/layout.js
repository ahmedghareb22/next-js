import React from 'react';

const Layout = ({children}) => {
  return (
    <div>
      <h1>Single Post Page</h1>
      <hr />
      <p>This is the layout for a single post.</p>
      <h3>header</h3>
      {children}
      <h3>footer</h3>
    </div>
  );
}

export default Layout;
