import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


// Component imports
import DefaultLayout from './components/DefaultLayout';


interface IProps { }

const App: React.FC<IProps> = (props) => {
    const [appTitle, setAppTitle] = useState(`Virtual Bar`)

    useEffect(() => {
        document.title = appTitle;
      });

      return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <DefaultLayout/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
