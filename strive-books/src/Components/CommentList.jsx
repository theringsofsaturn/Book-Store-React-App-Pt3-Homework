import ListGroup from "react-bootstrap/ListGroup";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsProps }) => (
  <ListGroup>
    {console.log({ commentsProps })}
    {commentsProps.map((element) => (
      <SingleComment comment={element} />
    ))}
  </ListGroup>
);

export default CommentList;
