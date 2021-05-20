import React from "react";
import { Route, Redirect } from "react-router-dom";

import AppContext from "../context.js";

function MainPage() {
  return <h3>Main Page</h3>;
}

function RouteMainPage() {
  let auth = React.useContext(AppContext);
  return (
    <Route
      render={({ location }) =>
        auth.user ? (
          <MainPage />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default RouteMainPage;
