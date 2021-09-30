import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [], // empty array variable to receive the array of comments from the API
  };

  componentDidMount = async () => {
    try {
    } catch (error) {
        console.log(error)
    }
  };
  render() {
    return <div>{/* <CommentList comments = {}/> */}</div>;
  }
}

export default CommentArea;
