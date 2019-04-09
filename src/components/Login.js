import React from 'react';
import PropType from 'prop-types';

export default function Login(props) {
  return (
    <nav className="login">
      <h2>Inventory</h2>
      <p>Sign in to manage your store's inventory</p>
      <button
        className="github"
        onClick={() => {
          props.authenticate('Github');
        }}
      >
        Login with Github
      </button>
      <button
        className="facebook"
        onClick={() => {
          props.authenticate('Facebook');
        }}
      >
        Login with Facebook
      </button>
      <button
        className="twitter"
        onClick={() => {
          props.authenticate('Twitter');
        }}
      >
        Login with twitter
      </button>
    </nav>
  );
}

Login.propTypes = {
  authenticate: PropType.func.isRequired
};
