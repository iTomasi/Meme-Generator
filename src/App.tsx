import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from "./views/Home";
import MemeForm from "./views/MemeForm";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/creating-meme/:id" component={MemeForm}/>
    </Switch>
    </>
  );
}

export default App;
