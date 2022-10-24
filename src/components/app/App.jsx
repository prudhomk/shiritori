/* eslint-disable max-len */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Game from '../game/Game';
import Rules from '../game/Rules';


export default function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Rules}/>
        <Route exact path="/game" component={Game}/>
      </Switch>

    </>
  );
}

