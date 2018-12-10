import * as React from "react";
import {BrowserRouter, Route} from "react-router-dom";

interface IProps { name: string; }

import Layout from './Layout'
import Home from './Home'
import Drones from './Drones'

export class App extends React.Component<IProps, {}> {
  render() {
    return <BrowserRouter>
              <Layout>
                <Route path="/" exact component={Home}/>
                <Route path="/drones" component={Drones}/>
              </Layout>
            </BrowserRouter>;
  }
}
