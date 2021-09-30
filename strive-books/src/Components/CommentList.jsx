import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ commentsProps }) => (
  <ListGroup>
    {commentsProps.map((element) => {
      <ListGroup.Item key={element._id}>Cras justo odio</ListGroup.Item>;
    })}
  </ListGroup>
);

export default CommentList;
