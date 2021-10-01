import React from "react";
import Form from "react-bootstrap/Form";

class AdComment extends React.Component {
  state = {
    commentObj: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Comment Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add comment here"
              value={this.state.commentObj.comment}
              onChange={e => this.setState({
                  comment: {
                      
                  }
              })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control as="select" value={this.state.commentObj.rate}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AdComment;
