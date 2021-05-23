import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import UserList from './components/UserList';
import PostList from './components/PostList';
import PostEdit from './components/PostEdit';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
    />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
