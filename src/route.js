import UserList from 'containers/UserListContainer';
import Counter from 'components/Counter';
import User from 'containers/UserContainer';

export default [
    {
        path: '/',
        exact: true,
        component: Counter,
    },
    {
        path: '/users',
        exact: true, // точный адрес
        component: UserList,
    },
    {
        path: '/users/:id',
        exact: true, 
        component: User,
    },
]