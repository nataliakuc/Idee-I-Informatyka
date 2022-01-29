import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Login from "./Login.js";
import User from "./User";
import Posts from "./Posts";

const ROOT = '/';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path={ROOT} element={<Login />} />
      <Route path={ROOT.concat(`user/:userId`)} element={<UserWrapper />}/>
      <Route path={ROOT.concat('posts/:userId')} element={<PostsWrapper />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

function UserWrapper() {
  const {userId} = useParams();
  return <User id={userId}/>;
}

function PostsWrapper() {
  const {userId} = useParams();
  return <Posts id={userId}/>;
}
