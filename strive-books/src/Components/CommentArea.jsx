import React from "react";

class CommentArea extends React.Component {
  state = {
    comments: [], // empty array variable to receive the array of comments from the API
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YThiODE2ZWY2MDAwMTVjZWQwNTUiLCJpYXQiOjE2MzIzMTU3ODksImV4cCI6MTYzMzUyNTM4OX0.5DMyLDm1BhaVjrBNllHevG_JWKkIIT8o2np1ZpuHMFw",
          },
        }
      );
      let data = response.json();
      console.log(data);
      this.setState({ comments: data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return <div>{<CommentList commentsProps={this.state.comments} />}</div>;
  }
}

export default CommentArea;
