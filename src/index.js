/*jshint esversion: 6*/
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam" timeAgo="Today at 1:23PM"
          content="Great post."/>
      </ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex" timeAgo="Today at 9:05AM"
          content="I disagree..."/>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane" timeAgo="Yesterday at 6:18PM"
          content="Please visit my blog!"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
