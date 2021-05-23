import React from 'react';
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput
} from 'react-admin';

const PostTitle = (props) => {
  return <span>Post {props.record.title ? `"${props.record.title}"` : ''}</span>;
}

const PostEdit = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
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