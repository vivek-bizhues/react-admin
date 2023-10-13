// PostDetail.js
import * as React from "react";
import { SimpleShowLayout, TextField } from "react-admin";

const PostDetail = (props) => (
  <SimpleShowLayout {...props}>
    <TextField source="title" label="Title" />
    <TextField source="body" label="Body" />
  </SimpleShowLayout>
);

export default PostDetail;
