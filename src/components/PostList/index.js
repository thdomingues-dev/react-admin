import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
} from 'react-admin';

const PostFilter = (props) => {
  return (
    <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />

      <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </Filter>
  );
};

const PostList = (props) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />

      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>

      <TextField source="title" />

      <EditButton />
    </Datagrid>
  </List>
);

export default PostList;
