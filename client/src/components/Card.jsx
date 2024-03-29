import React, { useEffect, useState } from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import moment from "moment";
import axios from 'axios';
import "moment/locale/es";
moment.locale("es");

function Card({ video, type }) {
  
  const [channel, setChannel] = useState([]);
const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(()=>{
      // useEffect no puede ser async, por eso creamos una funcion
      const fetchChannel = async () => {
          const res = await axios.get(`${process.env.REACT_APP_API}/users/find/${video.userId}`);
          try {
              setChannel(res.data);
              setIsLoading(false);
          } catch (err) {
              setError(err);
          }
      }
      fetchChannel();
  },[video.userId])

  if(error) return 'An error has occurred';
  if(isLoading) return 'Loading...';

  return (
    <div className={`${type === "small" ? "card cardSm" : type === "large" ? "card cardLg" : "card"}`}>
      <Link to={`/video/${video._id}`}>
        <img src={video.imageURL} alt="" />
      </Link>
      <div className="details">
        {type !== 'large' && <img className="avatar" src={channel.image} alt="" />}
        <div className="info">
          <h2 className="title">{video.title}</h2>
          {type === 'large' ? (
            <div className="channel-info">
              <img className="avatar" src={channel.image} alt="" />
              <h3 className="channel">{channel.name}</h3>
            </div>
          ) : (
            <h3 className="channel">{channel.name}</h3> 
          )}
          <div className="stats">
            <span className="views">
              {video.views}{" "}
              visitas
            </span>{" "}
            -
            <span className="length">
              {" "}
              {moment(video.createdAt).fromNow()}
            </span>
          </div>
          {type === 'large' && <p className="description">{video.description}</p>}
          
          {(type === 'small' || type === 'large') && <MoreVertOutlinedIcon id="recommendation-options" />}
        </div>
      </div>
    </div>
  );
}
export default Card;
