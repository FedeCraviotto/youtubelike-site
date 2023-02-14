import React from "react";
import { Link } from "react-router-dom";
import './comment.scss';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import moment from 'moment';
function Comment({comment}){
    return(
        <div className="comment" key={comment.id}>
            <Link to="/">
              <img src={comment.avatar} alt="" referrerPolicy="no-referrer"/>
            </Link>
            <div className="comment-info">
              <p>{comment.user} <span>{moment(comment.postedAt).fromNow()}</span></p>
              <p>{comment.comment}</p>
              <div className="reactions">
                <button>
                  <ThumbUpOutlinedIcon />
                </button>
                {comment.likes}
                <button>
                  <ThumbDownOutlinedIcon />
                </button>
                  <button>Responder</button>
              </div>
            </div>
          </div>
    )
}
export default Comment;