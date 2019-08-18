import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'; // нужен только в главном компоненте

import UserList from 'containers/UserListContainer'

class App extends Component /* React.Component */ {
      
    render () {
        return (
            <Fragment>
                <UserList />
            </Fragment>
        );
    }
}


ReactDom.render(<App />, document.getElementById('app'));