import React from "react";
import './uploadPopup.scss';


function UploadPopup({ setVideoPopup }) {
    return(
        <div className="container">
            <div className="wrapper">
                <button className="close" onClick={()=> setVideoPopup(false)}>X</button>
                <h1> Upload your video</h1>
                <input name='title' type="text" placeholder="Title"/>
                <input name='tags' type="text" placeholder="Insert video tags"/>
                <label htmlFor="video">Video:</label>
                <input name="video" id="video" type="file" accept="video/*"/>
                <textarea name="description"rows='8' placeholder="Video description"></textarea>
                <label htmlFor="video">Thumbnail:</label>
                <input name="thumbnail" id="thumbnail" type="file" accept="video/*"/>
                <button>Upload video</button>
            </div>
        </div>
    )
}
export default UploadPopup;