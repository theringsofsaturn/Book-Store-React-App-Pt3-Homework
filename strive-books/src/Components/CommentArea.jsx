import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [], // empty array variable to receive the array of comments from the API
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin
      );
      let data = response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return <div>{/* <CommentList comments = {}/> */}</div>;
  }
}

export default CommentArea;
