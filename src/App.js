import React from 'react';
import './App.css';

import { Router } from "@reach/router";

import Header from "./components/header";
import Welcome from "./pages/welcome";
import Detail from "./pages/detail";
import Analysis from "./pages/analysis";
import useUser from "./hooks/use_user";

import UserContext from "./context/user";

const App = () => {
  const user = useUser();

  return [
    <Header />,
    <Router>
      <Welcome path="/" user={user} />
      <Detail path=":id" user={user} />
      <Analysis path="analysis" user={user} />
    </Router>
  ];
};


export default App;
