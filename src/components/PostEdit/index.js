import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from 'react-admin';

const PostEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />

        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>

        <TextInput source="title" />

        <TextInput source="body" multiline />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;