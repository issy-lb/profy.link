import React from "react";
import { Route, Redirect } from "react-router-dom";

import { auth } from "../../../api/auth.js";
import AppContext from "../context.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.getAuth = this.props.getAuth;
    this.getUserEmail = this.getUserEmail.bind(this);
    this.getUserPassword = this.getUserPassword.bind(this);
    this.activateViewer = this.activateViewer.bind(this);
  }

  //フォーム入力値を「state」へ保存
  getUserEmail(event) {
    this.setState({ email: event.target.value });
  }

  getUserPassword(event) {
    this.setState({ password: event.target.value });
  }

  activateViewer(event) {
    auth
      .signInWithEmailAndPassword(this.state.email, this.state.password) // 5
      .then((response) => {
        this.getAuth(response.user.uid); // 6
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault(); // 7
  }

  render() {
    return (
      <div>
        <form onSubmit={this.activateViewer}>
          <label>
            email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.getUserEmail}
            />
            password:{" "}
            <input
              type="text"
              value={this.state.password}
              onChange={this.getUserPassword}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
LoginForm.contextType = AppContext; // 8

function RouteLogin(props) {
  let context = React.useContext(AppContext); // 9
  return (
    // 10
    <Route
      render={({ location }) =>
        context.user ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          <LoginForm getAuth={props.getAuth} />
        )
      }
    />
  );
}

export default RouteLogin;
