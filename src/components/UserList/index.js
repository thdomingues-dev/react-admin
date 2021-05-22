import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField
} from 'react-admin';

import UrlField from '../UrlField/index';

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="company.name" />
      <UrlField source="website" />
    </Datagrid>
  </List>
);

export default UserList;