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
import { useState } from "react";
import ExtendedInfo from '../components/ExtendedInfo';

function Reproducer({ video }) {
  const [openExtendedInfo, setOpenExtendedInfo] = useState(false)
  const dummyVideo = {
    id: 12,
    image:
      "https://i.ytimg.com/vi/xHlqSABb7pI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATDy_Gmu6kG7e0uo4puP8wujKjiw",
    length: "2:00:00",
    title: "Land of Rising Sun",
    channel: "Beyond Skys",
    views: 613382,
    suscribers: 165933,
    uploadDate: "2023/01/25 08:15:13",
    avatar:
      "https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/embed/xHlqSABb7pI",
    likes: 65985251,
    description: 'From a collection of house music that includes the best mixins performed and delivered by australian DJs, to the world. Enjoy!'
  };

  return (
    <div className="reproducer">
      <div className="content">
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="720"
            src={dummyVideo.link}
            title={dummyVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2 className="title">{dummyVideo.title}</h2>
          <div className="details">
            <div className="info">
              <img src={dummyVideo.avatar} alt="" className="avatar" />
              <div className="channel">
                <span>{dummyVideo.channel}</span>
                <span>
                  {dummyVideo.suscribers
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
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
                  <ThumbUpOutlinedIcon />{" "}
                  {dummyVideo.likes
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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

          <div className="video-description">
            <span>
              {dummyVideo.views
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                 - 
              {moment(dummyVideo.updloadDate).fromNow()}
               - 

            </span>
            <p className="description">
              {dummyVideo.description}
            </p>
            {console.log(openExtendedInfo)}
            {openExtendedInfo ? <ExtendedInfo /> : <p onClick={()=> setOpenExtendedInfo(!openExtendedInfo)} className='showInfo'>Mostrar mas...</p>}
          </div>
        </div>
      </div>
      <div className="recommendations">recommendations</div>
    </div>
  );
}
export default Reproducer;
