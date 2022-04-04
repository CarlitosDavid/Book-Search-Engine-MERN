import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Navbar from "./components/Navbar";

const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://CarlsCluster:<HFok1ZGc1G5hygCz>@cluster0.t0zz8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to database"))
  .then(() => {
    App.listen(5000);
  })
  .catch((err) => console.log(err));

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");

    opration.setContext({
      headers: {
        authorization: token ? "Bearer ${token}" : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
