import React, { useEffect, useState } from "react";
import "./uploadPopup.scss";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../firebase";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function UploadPopup({ setVideoPopup }) {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [imageProgress, setImageProgress] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);

  const [formInputs, setFormInputs] = useState({
    title: "",
    tags: [],
    description: "",
    imageURL: "",
    videoURL: "",
  });

  const navigate = useNavigate();

  const updateInputs = (e) => {
    if (Array.isArray(formInputs[e.target.name])) {
      setFormInputs({
        ...formInputs,
        tags: e.target.value.split(",").map((string) => string.trim()),
      });
    } else {
      setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
    }
    console.log(formInputs);
  };

  const uploadFile = (file, urlType) => {
    // Al storage le pasamos la app del archivo firebase.js
    const storage = getStorage(app);
    const filename = new Date().getTime() + file.name;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const fileType = urlType;

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Upload percentage
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        urlType === "imageURL"
          ? setImageProgress(progress)
          : setVideoProgress(progress);
      },
      (error) => {},
      () => {
        // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
        getDownloadURL(storageRef).then((downloadURL) => {
          if (fileType === "imageURL") {
            setFormInputs({ ...formInputs, imageURL: downloadURL });
          } else {
            setFormInputs({ ...formInputs, videoURL: downloadURL });
          }
        });
      }
    );
  };
  useEffect(() => {
    video && uploadFile(video, "videoURL");
  }, [video]);

  useEffect(() => {
    image && uploadFile(image, "imageURL");
  }, [image]);

  const handleClearUploaded = (type) => {
    if (type === "image") {
      setImage(null);
      setImageProgress(0);
      setFormInputs({ ...formInputs, imageURL: "" });
    } else {
      setVideo(null);
      setVideoProgress(0);
      setFormInputs({ ...formInputs, videoURL: "" });
    }
    console.log(formInputs)
  };

  const uploadToDatabase = async (e) => {
    e.preventDefault();
    console.log(formInputs)
    try {
        setVideoPopup(false);
        const res = await axios.post(`${process.env.REACT_APP_API}/videos/`, {...formInputs})
        res.status === 200 && navigate(`/video/${res.data._id}`);
    } catch (err) {
        console.log(err)
    }
  }


  return (
    <div className="upload-popup">
      <div className="wrapper">
        <button className="close" onClick={() => setVideoPopup(false)}>
          X
        </button>
        <h1> Upload your video</h1>
        <input
          name="title"
          type="text"
          placeholder="Title"
          onChange={updateInputs}
        />
        <input
          name="tags"
          type="text"
          placeholder="Insert tags separated by commas Ej: music, pizza, dinasaurs"
          onChange={updateInputs}
        />
        <label htmlFor="video">Video:</label>
        {videoProgress > 0 &&
          videoProgress !== 100 &&
          "Uploading... video " + videoProgress + "%"}
        {videoProgress === 0 && (
          <input
            name="video"
            id="video"
            type="file"
            accept="video/*"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        )}
        <div className="uploads">
          {video && videoProgress === 100 && (
            <span>Video uploaded successfully</span>
          )}
          {videoProgress === 100 && (
            <button onClick={() => handleClearUploaded("video")}>Cancel</button>
          )}
        </div>
        <textarea
          name="description"
          rows="8"
          placeholder="Video description"
          onChange={updateInputs}
        ></textarea>
        <label htmlFor="thumbnail">Thumbnail:</label>
        {imageProgress > 0 &&
          imageProgress !== 100 &&
          "Uploading... image " + imageProgress + "%"}
        {imageProgress === 0 && (
          <input
            name="thumbnail"
            id="thumbnail"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        )}
        <div className="uploads">
          {image && imageProgress === 100 && (
            <img
              className="url-mini"
              src={image && URL.createObjectURL(image)}
              alt=""
            />
          )}
          {imageProgress === 100 && (
            <button
              className="cancel"
              onClick={() => handleClearUploaded("image")}
            >
              Cancel
            </button>
          )}
        </div>
        <button className={video && videoProgress === 100 ? '' : 'disabled'} onClick={uploadToDatabase}>Upload video</button>
      </div>
    </div>
  );
}
export default UploadPopup;
