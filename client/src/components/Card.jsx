import React from "react";
import './card.scss';
import { Link } from 'react-router-dom'
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');
function Card({video}){

    return (
        <div className="card">
            <Link to={`/video/${video.id}`}>
                <img src={video.image} alt="" />
            </Link>
            <div className="details">
                <img className="avatar" src={video.avatar} alt="" />
                <div className="info">
                    <h2 className="title">
                    {video.title}
                    </h2>
                    <h3 className="channel">
                    {video.channel}
                    </h3>
                    <div className="stats">
                        <span className="views">{(video.views).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span> - 
                        <span className="length"> {moment(video.uploadDate).fromNow()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;