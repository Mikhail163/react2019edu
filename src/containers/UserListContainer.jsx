import React, { PureComponent, Fragment } from 'react';

import UserList from 'components/UserList';

export default class UserListComtainer extends PureComponent {
  
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            users:[],
            page:1,
        }
    }
    componentDidMount() {
        this.load();
    }

    load() {
        const { page, users } = this.state;
        if ( page == 1 ) {
            this.setState({loading: true});
        }
        
        fetch(`https://jsonplaceholder.typicode.com/users?Limit=10&_page=${page}`)
            .then((response) => response.json())
            .then((results) => {
                this.setState({
                    loading: false,
                    page: page + 1,
                    users: users.concat(results),
                })
            })
    }

    handleLoadMore = () => {
        this.load();
    }

    render() {
        const { users, loading } = this.state;
        return (
            <Fragment>
                {loading ? <div>Loading...</div> : <UserList onLoadMore={this.handleLoadMore} users={users} />}
            </Fragment>
        );     
    }
}