import React from 'react';
import {Link} from "react-router-dom";

import styles from "./App.css"

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null,
      question: null
    };

    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTopicChange(event) {
    const {question} = this.state;
    this.setState({topic: event.target.value, question: question});
  }

  handleQuestionChange(event) {
    const {topic} = this.state;
    this.setState({topic: topic, question: event.target.value});
  }

  handleSubmit(event) {
    const {topic, question} = this.state;
    alert(`New post (topic: ${topic}, question: ${question}) has been sent.`)
    event.preventDefault();
  }

  render() {
    const {id} = this.props;
      return <body class="background">
      <div class="button">
        <Link to={'/'} class="link">Wyloguj</Link>
      </div>
      <div class="button">
        <Link to={`/posts/${id}`} class="link">Forum</Link>
      </div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="text">
            <label>
              <div class="action">Wybierz temat pytania:</div>
              <input type={"text"} value={this.state.topic} onChange={this.handleTopicChange}/>
            </label>
          </div>
          <div class="text">
            <label>
              <div class="action">Jakie masz pytanie?</div>
              <input type={"text"} value={this.state.question} onChange={this.handleQuestionChange}/>
            </label>
          </div>
          <div>
            <input type={"submit"} value={'Submit'} />
          </div>
        </form>
      </div>
    </body>;
    }
}