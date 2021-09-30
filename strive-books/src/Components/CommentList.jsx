import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ props }) => (
  <ListGroup>
    {commentsProps.map((element) => {
      <ListGroup.Item>Cras justo odio</ListGroup.Item>;
    })}
  </ListGroup>
);

export default CommentList;
