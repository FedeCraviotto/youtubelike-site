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
import Comments from '../components/Comments';
import ReactPlayer from "react-player";
import Card from "../components/Card";

function Reproducer({ video }) {
  const [openExtendedInfo, setOpenExtendedInfo] = useState(false)
  const dummyVideo = {
    id: 12,
    image:"https://i.ytimg.com/vi/WYp9Eo9T3BA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA70fLxAnFjKz506cZ_Naivou-HYA",
    length: "2:00:00",
    title: "Land of Rising Sun",
    channel: "Beyond Skys",
    views: 613382,
    suscribers: 165933,
    uploadDate: "2023/01/25 08:15:13",
    avatar:"https://yt3.ggpht.com/ytc/AL5GRJW6fobZK0VK-aBTyGiVjTB6It9BtIYWMvncEhFWEA=s68-c-k-c0x00ffffff-no-rj",
    // link: "https://www.youtube.com/embed/xHlqSABb7pI",
    link: "https://www.youtube.com/watch?v=xHlqSABb7pI&t=1s&ab_channel=BeyondSkys",
    likes: 65985251,
    description: 'From a collection of house music that includes the best mixins performed and delivered by australian DJs, to the world. Enjoy!',
    extendedDescription: 'lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \r ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \ripsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem \ripsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum lorem lorem ipsun cualquierum ',
    comments: [
      {
        id: 1,
        likes: 240,
        user: 'Pipe',
        comment: 'Wow, que majo',
        postedAt: "2023/01/23 08:15:13",
        avatar:"https://yt3.ggpht.com/ytc/AL5GRJWkGtbsIU9S1a6GksZgwaqG4ujXD1tz9R7PLt3jp7aushBf7XTPLKlP8UXYGNv8=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 2,
        likes: 140,
        user: 'Tanya',
        comment: 'El mejor compilado, lejos',
        postedAt: "2023/01/20 04:15:13",
        avatar:"https://yt3.ggpht.com/ytc/AL5GRJXORGOlLnzBpJXMaO0RwEk5LRWd1f1sYESY0HBBhmI=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 3,
        likes: 37,
        user: 'Lucas',
        comment: 'Nice beat',
        postedAt: "2023/01/17 02:15:13",
        avatar:"https://yt3.ggpht.com/ytc/AL5GRJUOd9JZO3id1OiU-KqFsfZgWfCYguc--PGlufXmLg=s88-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 4,
        likes: 0,
        user: 'Samantha',
        comment: 'HOlly Molly',
        postedAt: "2023/01/15 17:15:13",
        avatar:"https://yt3.ggpht.com/ytc/AL5GRJWbTA-229k5tdOoHGMtdx1Gu6v_REj66XaApRsjFQ=s88-c-k-c0x00ffffff-no-rj",
      },
    ]
  };

  return (
    <div className="reproducer">
      <div className="content">
        <div className="video-wrapper">
          {/* <iframe
            width="100%"
            height="720"
            src={dummyVideo.link}
            title={dummyVideo.title}
            frameBorder="0"
            sandbox="allow-scripts allow-presentation allow-same-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            playing={true}
            url={dummyVideo.link}
            width='100%'
            height='720px'
            controls={true}
          />
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
                  <ThumbUpOutlinedIcon />
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

          <div className="video-description" onClick={()=> setOpenExtendedInfo(!openExtendedInfo)}>
            <span>
              {dummyVideo.views
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} visitas - 
              {moment(dummyVideo.uploadDate).fromNow()}

            </span>
            <p className="description">
              {dummyVideo.description}
            </p>
            {openExtendedInfo ? <ExtendedInfo extendedDescription={dummyVideo.extendedDescription} open={openExtendedInfo} setOpen={setOpenExtendedInfo}/> : <p  className='showInfo'>Mostrar mas...</p>}
          </div>
            <Comments comments={dummyVideo.comments}/>
        </div>
      </div>
      <div className="recommendations">
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
        <Card video={dummyVideo} type="small"/>
      </div>
    </div>
  );
}
export default Reproducer;
