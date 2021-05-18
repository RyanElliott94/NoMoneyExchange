import { useState } from "react";
import ReactVideo from "../Extras/ReactVideo";
import Navbar from "../Main/Navbar";
import { getFileFromToken, uploadFiles } from "../../Controllers/mediaController";

export default function UploadExample() {
    const [videoSource, setVideoSource] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
    const [imageSource, setImageSource] = useState("https://source.unsplash.com/random/500x500");
    const [originalVideo, setOriginalVideo] = useState(null);
    const [originalImage, setOriginalImage] = useState(null);
    const [storageToken, setStorageToken] = useState("");
    const [location, setLocation] = useState("");
    const [mediaType, setMediaType] = useState("");


    const handleVideoUpload = e => {
        uploadFiles(originalVideo)
        .then(data => {
            if(data) {
                setVideoSource(data.fileData.data.Location);
                setLocation(data.fileData.data.Location);
                setStorageToken(data.token);
                setMediaType(data.fileData.data.key.endsWith(".mp4") ? "video" : "image");
            }
        }).catch(error => console.log(error));
    }

    const handleImageUpload = e => {
        uploadFiles(originalImage)
        .then(data => {
            if(data) {
                setImageSource(data.fileData.data.Location);
                setLocation(data.fileData.data.Location);
                setStorageToken(data.token);
                setMediaType(data.fileData.data.key.endsWith(".mp4") ? "video" : "image");
            }
        }).catch(error => console.log(error));
    }

    const handleFindFile = eve => {
        if(eve.keyCode == 13) {
           getFileFromToken(eve.target.value)
           .then(data => {
                data.fileLocation.includes(".mp4") ? setVideoSource(data.fileLocation) : setImageSource(data.fileLocation);
                setMediaType(data.fileLocation.includes(".mp4") ? "video" : "image");
           })
        }
    }

    return (
        <div className="example-page">
            <Navbar />
            <div className="example-main">
                <div className="example-content">
                <h1>Upload Example</h1>
                <div className="video-upload">
                    <section className="video-preview">
                        <input type="file" accept="video/*" onChange={e => {
                            setVideoSource(URL.createObjectURL(e.target.files[0]))
                            setOriginalVideo(e.target.files[0]);
                            }}></input>
                        <ReactVideo videoSource={videoSource} />
                        <button className="upload-btn" onClick={handleVideoUpload}>Upload</button>
                    </section>
                </div>

                <div className="image-upload">
                <section className="image-preview">
                    <input type="file" accept="image/*" onChange={e => {
                        setImageSource(URL.createObjectURL(e.target.files[0]))
                        setOriginalImage(e.target.files[0]);
                    }}></input>
                    <img src={imageSource} />
                    <button className="upload-btn" onClick={handleImageUpload}>Upload</button>
                </section>
                </div>
                </div>

                <div className="upload-result">
                    <h1>Result</h1>

                    <div className="media-result">
                        {mediaType === "video" ? <video width="400px" height="400px" controls src={videoSource}/> : <img src={imageSource} />}
                        <div className="media-info">
                            <p style={{marginTop:"10px"}}>File Type: {mediaType}</p>
                            <p>File Location: {location}</p>
                            <p>Access Token: <small><strong>(Use this to fetch this file again)</strong></small></p>
                            <p>{storageToken}</p>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="file-token">File Access Token <small><strong>(This was generated when you uploaded the file)</strong></small></label>
                        <input type="text" placeholder="Enter the access token... Then press enter... Then wait a moment" onKeyDown={handleFindFile}></input>
                    </div>
                </div>
            </div>
        </div>
    )
}