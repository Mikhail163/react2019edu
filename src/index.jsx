import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom'; // нужен только в главном компоненте
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from 'components/Menu';

import routes from './route';

class App extends Component /* React.Component */ {

    render() {
        return (
            <Fragment>
                <header>this is header</header>
                <BrowserRouter>
                    <Fragment>
                        <Menu/>
                        <Switch>
                            {routes.map((route, idx) => <Route {...route} key={idx} />)}
                        </Switch>
                    </Fragment>
                </BrowserRouter>
                <footer>this is footer</footer>
            </Fragment>
        );
    }
}


ReactDom.render(<App />, document.getElementById('app'));