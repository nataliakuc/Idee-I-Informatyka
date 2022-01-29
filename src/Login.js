import React from 'react';
import {Link} from "react-router-dom";

import styles from "./App.css"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({login: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.login);
    event.preventDefault();
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
    <label>
      <div class="action">Login:</div>
      <input type="text" value={this.state.login} onChange={this.handleChange}/>
    </label>
    <label>
      <div class="action">Hasło:</div>
      <input type="password"/>
    </label>
    <div class="button">
    <Link to={`/user/${this.state.login}`} class="link">Zaloguj się</Link>
    </div>
    </form>;
  }
}