import React from "react";
import "./reproducer.scss";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import moment from "moment";
import { useState, useEffect } from "react";
import ExtendedInfo from "../components/ExtendedInfo";
import Comments from "../components/Comments";
import ReactPlayer from "react-player";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
  like,
  dislike,
} from "../redux/videoSlice.js";
import { subscribe, unsubscribe } from '../redux/userSlice';
import { addSub, restSub, fetchChannel } from '../redux/channelSlice';

function Reproducer() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo, isLoading, error } = useSelector(
    (state) => state.video
  );
  const { currentChannel : channel } = useSelector(
    (state) => state.channel
  );
  const dispatch = useDispatch();
  const [openExtendedInfo, setOpenExtendedInfo] = useState(false);
  
  const [recommendedVideos, setRecommendedVideos] = useState([]);
  const path = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchStart());
      try {
        const videoResponse = await axios.get(
          `${process.env.REACT_APP_API}/videos/find/${path}`
        );
        const channelResponse = await axios.get(
          `${process.env.REACT_APP_API}/users/find/${videoResponse.data.userId}`
        );
  
        dispatch(fetchSuccess(videoResponse.data));
        dispatch(fetchChannel(channelResponse.data));
      } catch (err) {
        dispatch(fetchFailure());
      }
    };
    const fetchRecommended = async () => {
      try {
        const recommendedResponse = await axios.get(
          `${process.env.REACT_APP_API}/videos/random`
        );
        setRecommendedVideos(recommendedResponse.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecommended();
    fetchData();
  }, [path, dispatch]);

  //Olive Waygu tiene comments

  const handleLike = async () => {
    if (currentUser) {
      await axios.put(
        `${process.env.REACT_APP_API}/videos/like/${currentVideo._id}`
      );
      dispatch(like(currentUser._id));
    } else {
      navigate("/login");
    }
  };
  const handleDislike = async () => {
    if (currentUser) {
      await axios.put(
        `${process.env.REACT_APP_API}/videos/dislike/${currentVideo._id}`
      );
      dispatch(dislike(currentUser._id));
    } else {
      navigate("/login");
    }
  };

  const handleSubscribe = async () => {
    if (currentUser) {
      await axios.put(
        `${process.env.REACT_APP_API}/users/sub/${channel._id}`
      );
      dispatch(subscribe(channel._id));
      dispatch(addSub());

    } else {
      navigate("/login");
    }
  };
  const handleUnsubscribe = async () => {
    if (currentUser) {
      await axios.put(
        `${process.env.REACT_APP_API}/users/unsub/${channel._id}`
      );
      dispatch(unsubscribe(channel._id));
      dispatch(restSub());

    } else {
      navigate("/login");
    }
  };

  if (isLoading) return "Loading";
  if (error) return "Something went wrong";

  return (
    <div className="reproducer">
      <div className="content">
        <div className="video-wrapper">
          <ReactPlayer
            playing={true}
            url={currentVideo?.videoURL}
            width="100%"
            height="65vh"
            controls={true}
          />
          <h2 className="title">{currentVideo?.title}</h2>
          <div className="details">
            <div className="info">
              <img src={channel?.image} alt={channel?.name} className="avatar" />
              <div className="channel">
                <span>{channel?.name}</span>
                <span>
                  {channel?.subscribers > 0
                    ? channel?.subscribers
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "0"}{" "}
                  suscriptores
                </span>
              </div>
              <button>Unirse</button>
              {currentUser &&
              currentUser?.subscribedUsers?.includes(channel?._id) ? (
                <button onClick={handleUnsubscribe}>
                  <NotificationsNoneOutlinedIcon />
                  Suscrito
                  <KeyboardArrowDownOutlinedIcon />
                </button>
              ) : (
                <button onClick={handleSubscribe}>Suscribirse</button>
              )}
            </div>
            <div className="buttons">
              <div className="thumbs">
                <button onClick={handleLike}>
                  {currentUser &&
                  currentVideo?.likes.includes(currentUser._id) ? (
                    <ThumbUpIcon />
                  ) : (
                    <ThumbUpOutlinedIcon />
                  )}
                  {currentVideo?.likes?.length
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

                </button>
                <button onClick={handleDislike}>
                  {currentUser &&
                  currentVideo?.dislikes.includes(currentUser._id) ? (
                    <ThumbDownIcon />
                  ) : (
                    <ThumbDownOutlinedIcon />
                  )}
                </button>
              </div>
              <button>
                <ReplyOutlinedIcon /> Compartir
              </button>
              <button>
                <GetAppOutlinedIcon /> Descargar
              </button>
              <button className="three-dots">
                <MoreHorizOutlinedIcon />
              </button>
            </div>
          </div>

          <div
            className="video-description"
            onClick={() => setOpenExtendedInfo(!openExtendedInfo)}
          >
            <span>
              {currentVideo?.views
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              visitas -{moment(currentVideo?.createdAt).fromNow()}
            </span>
            <p className="description">
              ``
              {currentVideo?.description}
            </p>
            {openExtendedInfo ? (
              <ExtendedInfo
                extendedDescription={currentVideo?.description}
                open={openExtendedInfo}
                setOpen={setOpenExtendedInfo}
              />
            ) : (
              <p className="showInfo">Mostrar mas...</p>
            )}
          </div>
          {}
          <Comments videoId={currentVideo?._id} />
        </div>
      </div>
      {recommendedVideos.length > 0 && (
        <div className="recommendations">
          {recommendedVideos.map((video) => (
            <Card video={video} type="small" key={video._id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Reproducer;
