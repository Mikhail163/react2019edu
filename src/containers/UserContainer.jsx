import React, { PureComponent, Fragment } from 'react';

import User from 'components/User';

export default class UserContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: {},
        }
    }
    componentDidMount() {
        this.load();
    }
    
    load() {
        const { match } = this.props;

        console.log(match.params.id);

        fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then((response) => response.json())
            .then((user) => {
                this.setState({
                    loading: false,
                    user,
                })
            })
    }

    render() {

        const { user, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <User user={user} />}
            </Fragment>
        );
    }
}