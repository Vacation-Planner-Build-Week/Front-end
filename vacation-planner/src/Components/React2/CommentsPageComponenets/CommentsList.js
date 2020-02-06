import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { axiosWithAuth } from "../../Utilities/AxiosWithAuth";
import { Comments } from "./Comments";

export const CommentsList = props => {
  const [isaddingComment, setIsAddingComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [update, setUpdate] = useState(false);
  const initState = {
    comment: "",
    vacation_id: props.id,
    user_id: localStorage.getItem("userid")
  };
  const [commentToAdd, setCommentToAdd] = useState(initState);

  useEffect(() => {
    axiosWithAuth()
      .get(`/vacations/${props.id}/comments`)
      .then(res => {
        console.log("COMMENT_RES", res);
        setComments([...res.data]);
      })
      .catch(err => {
        console.log(err);
      });
  }, [update]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("COMMENT_SENT", commentToAdd);
    axiosWithAuth()
      .post("/comments", commentToAdd)
      .then(res => {
        console.log("COMMENT_ADD_RES", res);
        setUpdate(true);
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    e.preventDefault();
    setCommentToAdd({ ...commentToAdd, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button onClick={() => console.log("LOGIT", comments)}>LogIt</button>
      {isaddingComment ? (
        <>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              name="comment"
              value={commentToAdd.comment}
            />
            <button type="submit">Send</button>
            <button
              onClick={() => {
                setIsAddingComment(false);
              }}
            >
              Cancel
            </button>
          </form>
        </>
      ) : (
        <button
          onClick={() => {
            setIsAddingComment(true);
          }}
        >
          Add Comment
        </button>
      )}
      {!comments ? (
        <h3>Add a comment</h3>
      ) : (
        <div>
          {comments.map((ele, index) => (
            <Comments key={index} item={ele} />
          ))}
        </div>
      )}
    </div>
  );
};
