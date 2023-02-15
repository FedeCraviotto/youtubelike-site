import React, { useRef } from "react";
import "./comments.scss";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comment from "./Comment";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Comments({ comments }) {
  const { currentUser } = useSelector((state) => state.user);
  const actionContainer = useRef()
  const commentButton = useRef();

  const [description, setDescription] = useState("");

  function handleShowActions(){
    actionContainer.current.style.display="flex";
  }

  useEffect(()=>{
    if (currentUser){
      description === '' ? commentButton.current.disabled = false : commentButton.current.disabled = true;
    }
  },[description, currentUser])

  return (
    <div className="container">
      <div className="header">
        <span>{comments.length} comentarios</span>
        <span>
          {" "}
          <ReorderOutlinedIcon /> Ordenar por
        </span>
      </div>
      <div className="comments">
        {currentUser && (
          <div className="postComment">
          <Link to="/">
            <img src={currentUser.image} alt={currentUser.name} referrerPolicy="no-referrer"/>
          </Link>
          <div className="comment-info">
            <input
            onFocus={handleShowActions}
              type="text"
              placeholder="Agrega un comentario..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
            />
            <div className="actions" ref={actionContainer}>
              <SentimentVerySatisfiedOutlinedIcon />
              <div className="buttons">
                <button>Cancelar</button>
                <button disabled className="commentButton" ref={commentButton}>Comentar</button>
              </div>
            </div>
          </div>
        </div>
        )}
        

        {comments?.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}

      </div>
    </div>
  );
}

export default Comments;
