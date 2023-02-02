import React, { useRef } from "react";
import "./comments.scss";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comment from "./Comment";
import { useEffect } from "react";


function Comments({ comments }) {

  const actionContainer = useRef()
  const commentButton = useRef();

  const dummy = {
    id: 12,
    user: "Dummy",
    comment: "El mejor compilado, lejos",
    postedAt: "2023/01/20 04:15:13",
    avatar:
      "https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj",
  };

  const [description, setDescription] = useState("");

  function handleShowActions(){
    actionContainer.current.style.display="flex";
  }

  useEffect(()=>{
    description === '' ? commentButton.current.disabled = false : commentButton.current.disabled = true;
    console.log(description === '' ? commentButton.current.disabled = false : commentButton.current.disabled = true)

  },[description])

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
        <div className="postComment">
          <Link to="/">
            <img src={dummy.avatar} alt="" />
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

        {comments?.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}

      </div>
    </div>
  );
}

export default Comments;
