import * as React from "react";

interface IProps { name: string; }

import Layout from './Layout'
import Home from './Home'

export class App extends React.Component<IProps, {}> {
  render() {
    return <Layout>
              <Home />
           </Layout>;
  }
}
