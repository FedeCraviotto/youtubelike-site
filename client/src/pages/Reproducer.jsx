import React from "react";
import "./reproducer.scss";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
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
import { useLocation } from "react-router-dom";
import axios from "axios";
import { fetchFailure, fetchStart, fetchSuccess } from "../redux/videoSlice.js";

function Reproducer() {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo, isLoading, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const [openExtendedInfo, setOpenExtendedInfo] = useState(false);
  const [channel, setChannel] = useState({});
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
        setChannel(channelResponse.data);
        dispatch(fetchSuccess(videoResponse.data));
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

  const dummyVideo = {
    id: 12,
    image:
      "https://i.ytimg.com/vi/WYp9Eo9T3BA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA70fLxAnFjKz506cZ_Naivou-HYA",
    length: "2:00:00",
    title: "Land of Rising Sun",
    channel: "Beyond Skys",
    views: 613382,
    suscribers: 165933,
    uploadDate: "2023/01/25 08:15:13",
    avatar:
      "https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj",
    // link: "https://www.youtube.com/embed/xHlqSABb7pI",
    link: "https://www.youtube.com/watch?v=xHlqSABb7pI&t=1s&ab_channel=BeyondSkys",
    likes: 65985251,
    description:
      "From a collection of house music that includes the best mixins performed and delivered by australian DJs, to the world. Enjoy!",
    extendedDescription:
      "lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \r ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \ripsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \ripsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum ",
    comments: [
      {
        id: 1,
        likes: 240,
        user: "Pipe",
        comment: "Wow, que majo",
        postedAt: "2023/01/23 08:15:13",
        avatar:
          "https://yt3.ggpht.com/ytc/AL5GRJV-jG6YXeMkOQlR8cN-IMU22krT-7S-Uh30wA=s48-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 2,
        likes: 140,
        user: "Tanya",
        comment: "El mejor compilado, lejos",
        postedAt: "2023/01/20 04:15:13",
        avatar:
          "https://yt3.ggpht.com/ytc/AL5GRJUTX9fAg8dp5eaiSItCKuGi7EZmPGruAtXxXBEiBu4=s48-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 3,
        likes: 37,
        user: "Lucas",
        comment: "Nice beat",
        postedAt: "2023/01/17 02:15:13",
        avatar:
          "https://yt3.ggpht.com/ytc/AL5GRJWdoJgnI4P-3T_16xaIaZ6Ocjqujr4qO2KztGGK6A=s48-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 4,
        likes: 0,
        user: "Samantha",
        comment: "HOlly Molly",
        postedAt: "2023/01/15 17:15:13",
        avatar:
          "https://yt3.ggpht.com/ytc/AL5GRJVf54EMnc8Bz75iMFyDOyS2TQPPMKAVeknbExWOgA=s48-c-k-c0x00ffffff-no-rj",
      },
    ],
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
            height="70vh"
            controls={true}
          />
          <h2 className="title">{currentVideo?.title}</h2>
          <div className="details">
            <div className="info">
              <img src={channel.image} alt={channel.name} className="avatar" />
              <div className="channel">
                <span>{channel.name}</span>
                <span>
                  {channel?.suscribers > 0 ? (channel?.suscribers.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : ('0')
                  }
                    {" "}
                  suscriptores
                </span>
              </div>
              <button>
                <NotificationsNoneOutlinedIcon />
                Suscrito
                <KeyboardArrowDownOutlinedIcon />
              </button>
            </div>
            <div className="buttons">
              <div className="thumbs">
                <button className="">
                  <ThumbUpOutlinedIcon />
                  {currentVideo?.likes.length > 0 ? (currentVideo?.likes.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : ('0')
                  }
                </button>
                <button>
                  <ThumbDownOutlinedIcon />
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
          <Comments comments={dummyVideo.comments} />
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
