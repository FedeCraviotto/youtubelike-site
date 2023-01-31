import React from "react";
import './card.scss';
function Card({video}){

    
    return (
        <div className="card">
            <img src={video.image} alt="" />
            <div className="details">
                <img className="avatar" src={video.avatar} alt="" />
                <div className="info">
                    <h2 className="title">

                    </h2>
                    <h3 className="channel">

                    </h3>
                    <div className="stats">
                        <div className="views"></div>
                        <div className="length"></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;