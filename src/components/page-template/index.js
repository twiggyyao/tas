import React from "react";

export const PageTemplate = (props) => {
  return (
    <>
      <header>
        <h1>TAS</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Signup</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        {
          props.children && props.children
        }
      </main>
      <footer>
        <span>Copyright &copy; 2020 TAS. All rights reserved. </span>
      </footer>
    </>
  );
};
