import * as React from "react";
import { List, Datagrid, TextField, Link } from "react-admin";

const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Title" />
      <Link to={record => `/posts/${record.id}/show`}>View Details</Link>
    </Datagrid>
  </List>
);

export default PostList;
