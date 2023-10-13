import * as React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "./layput";

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com");
console.log(dataProvider)

const App = () => (
  <Admin dataProvider={dataProvider} layout={MyLayout}>
    <Resource name="posts" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />

  </Admin>
);

export default App;