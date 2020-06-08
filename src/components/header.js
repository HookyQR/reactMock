import React from 'react';
import useUser from '../hooks/use_user';
import { Link } from "@reach/router";

const Header = () => {
  const user = useUser();

  return <header>
    <h1>{user.greeting} {user.name}</h1>
    <nav>
      <Link to="/analysis">Analysis</Link> {" "}
      <Link to="/">Home</Link>
    </nav>
  </header>;
};

export default Header;
