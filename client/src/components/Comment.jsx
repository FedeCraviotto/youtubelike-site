import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './comment.scss';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import moment from 'moment';
import axios from 'axios';

function Comment({comment}){

  const [commentUser, setCommentUser] = useState([]);
  const [commentError, setCommentError] = useState('');
  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const fetchedUserData = await axios.get(`${process.env.REACT_APP_API}/users/find/${comment.userId}`);
        setCommentUser(fetchedUserData.data);  
      } catch (error) {
        setCommentError(error);
      }  
    }
    fetchUser();
  }, [comment])

  if(commentError) return (<span className="error-message">{commentError}</span>)

    return(
        <div className="comment" key={comment._id}>
            <Link to="/">
              <img src={commentUser.image || 'https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png'} alt={`${commentUser.name}`} referrerPolicy="no-referrer"/>
            </Link>
            <div className="comment-info">
              <p>{commentUser.name} <span>{moment(comment.createdAt).fromNow()}</span></p>
              <p>{comment.description}</p>
              <div className="reactions">
                <button>
                  <ThumbUpOutlinedIcon />
                </button>
                {comment.likes?.length}
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