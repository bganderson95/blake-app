import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import GroupPage from './Containers/GroupPage/GroupPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <GroupPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
