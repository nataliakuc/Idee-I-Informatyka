import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null
    };
  }

  componentDidMount() {
    const posts = _.range(10)
      .map(i => {
        return {
          id: i,
          topic: `Temat ${i}`,
          question: `Lorem ipsum dolo sit amet, consectetur adipiscing elit. Curabitur a eleifend tellus. Donec cursus accumsan lorem, quis cursus est dictum vel. Ut dapibus tincidunt sagittis. Nullam in ex elementum, convallis orci id, dictum felis. Ut a lacinia urna. Proin eget odio in libero lobortis porttitor et eget mauris. Etiam at mauris mauris. Duis ac nisl turpis. Ut elementum fringilla ex et porta. Donec a nulla scelerisque, molestie lorem vel, condimentum ligula.`,
          answers: []
        };
      });
    posts[0].answers.push("Lorem ipsum dolo sit amet, consectetur adipiscing elit. Curabitur")
    posts[4].answers.push("adipiscing elit. Curabitur Lorem ipsum dolo sit amet, consectetur")
    posts[4].answers.push("Lorem consectetur adipiscing adipiscing elit. Curabitur Lorem ipsum dolo sit amet, consectetur")
    posts[7].answers.push("Lorem consectetur adipiscing elit ipsum dolo sit amet. Curabitur")

    this.setState({posts: posts});
  }

  handleReply(thread) {
    const answer = prompt(`Enter your response to the thread: ${thread}`);
    const {posts} = this.state;
    const index = _.findIndex(posts, {id: thread});
    posts[index].answers.push(answer);
    this.setState({posts: posts});
  }

  render() {
    if (this.state.posts) {
      return <div>
        <div class="button"> {this.renderBack()} </div>
        {this.state.posts && this.state.posts.map((p, i) => <div key={p.id}>
            <div class="action"> {p.topic} </div>
            <div class="action"> Pytanie: </div>
            <div class="question"> {p.question} </div>
            <div>
              <div class="action">Odpowiedzi:</div>
              {p.answers.map((a, i) => <div key={i}>
                <div class="question">{a}</div>
              </div>)}
            </div>
            <div>
              <button class="button" onClick={() => this.handleReply(p.id)}>Odpowiedz</button>
            </div>
          </div>
        )}
      </div>;
    }

    return <div>Ładowanie...</div>
  }

  renderBack() {
    const {id} = this.props;
    return <div><Link to={`/user/${id}`} class="link">Powrót</Link></div>;
  }
}
