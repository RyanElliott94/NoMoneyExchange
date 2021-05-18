import React, { useEffect } from "react";
import "./react-video-style.scss";
import PropTypes from "prop-types";
import { BsPlayFill, BsPauseFill, BsVolumeMuteFill, BsFillVolumeUpFill, BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useRef, useState } from "react";
const $ = require("jquery");

const ReactVideo = ({
    videoSource
}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [currentSource, setCurrentSource] = useState(videoSource);
    const videoPlayer = useRef(null);


    useEffect(() => {
        setCurrentSource(videoSource);
        videoPlayer.current.pause();
        videoPlayer.current.currentTime = 0;
        videoPlayer.current.load();
    }, [currentSource, videoSource]);

    useEffect(() => {
        if(isFullscreen){
           $("video").css({objectFit: "contain"});
        }else{
            $("video").css({objectFit: "cover"});
        }
    }, [isFullscreen]);

    const initVideoPlayer = player => {
        player.target.volume = getLastUsedVolume();
    }

    const togglePlayState = e => {
        if(!isPlaying) {
            setIsPlaying(true);
            videoPlayer.current.play();
        }else{
            setIsPlaying(false)
            videoPlayer.current.pause();
        }
    }

    const handleMute = e => {
        if(videoPlayer.current.muted) {
            videoPlayer.current.muted = false
            setIsMuted(false);
            $(".volume-tracker input").val(getLastUsedVolume());
        }else{
            videoPlayer.current.muted = true;
            setIsMuted(true);
            $(".volume-tracker input").val(0);
        }
    }

    const handleVideoTimeUpdates = e => {
        $("#seek-bar").val(e.target.currentTime);
        const time = formatTime(Math.round(e.target.currentTime));
        $(".current-time").text(`${time.minutes}:${time.seconds}`);
        $(".current-time").attr('datetime', `${time.minutes}m ${time.seconds}s`)
    }

    const handleSeekBar = e => {
        videoPlayer.current.currentTime = videoPlayer.current.duration * e.target.value / e.target.max
    }

    const formatTime = (timeInSeconds) => {
        const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
      
        return {
          minutes: result.substr(3, 2),
          seconds: result.substr(6, 2),
        };
      };

      const handleDurationUpdates = e => {
        const videoDuration = Math.round(e.target.duration);
        $("#seek-bar").attr('max', videoDuration);
        const time = formatTime(videoDuration);
        $(".total-time").text(`${time.minutes}:${time.seconds}`);
        $(".total-time").attr('datetime', `${time.minutes}m ${time.seconds}s`);
      }

      const handleVolume = e => {
          videoPlayer.current.volume = e.target.value;
          localStorage.setItem("last-volume", videoPlayer.current.volume);
          if(videoPlayer.current.volume === 0) {
            setIsMuted(true);
        }else{
            setIsMuted(false);
        }
      }

      const handleFullscreen = e => {
          const videoContainer = $(".custom-video").get(0);
          if (document.fullscreenElement) {
            document.exitFullscreen();
            setIsFullscreen(false);
          } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
            setIsFullscreen(false);
          } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
            setIsFullscreen(true);
          } else {
            videoContainer.requestFullscreen();
            setIsFullscreen(true);
          }
      }

      const getLastUsedVolume = () => localStorage.getItem("last-volume"); 


    return (
        <div className="custom-video">
            <video id="custom-video-player"
            onLoadedData={initVideoPlayer} 
            onMouseEnter={() => setShowControls(true)}
            onMouseOut={() => setShowControls(false)}
            className="full-video" ref={videoPlayer}
            onTimeUpdate={handleVideoTimeUpdates}
            onDurationChange={handleDurationUpdates}
            onClick={togglePlayState}>
                <source src={currentSource}></source>
            </video>

            <div className="custom-video-controls" style={{opacity: `${showControls ? "1" : "0"}`}} onMouseEnter={() => setShowControls(true)}>
                <div className="video-seek-bar">
                <input type="range" id="seek-bar" step="1" min="0" defaultValue="0" onChange={handleSeekBar}></input>
                </div>

                <div className="main-controls">
                    <div className="left-controls">
                    {!isPlaying ? <div className="play-video">
                    <BsPlayFill color="white" onClick={togglePlayState} fontSize="2.3rem"/>
                </div> :
                <div className="pause-video">
                    <BsPauseFill color="white" onClick={togglePlayState} fontSize="2.3rem"/>
                </div>}

                <div className="volume-tracker">
                    {isMuted ? <BsVolumeMuteFill color="white" fontSize="2.5rem" onClick={handleMute}/> : <BsFillVolumeUpFill color="white" fontSize="2.5rem" onClick={handleMute}/>}
                    <input type="range" id="volume" step="0.01" min="0" max="1" defaultValue={localStorage.getItem("last-volume")} onChange={handleVolume}></input>
                    <p className="current-time">0:00/<p className="total-time">0:00</p></p>
                </div>
                    </div>

                <div className="fullscreen-control">
                    {isFullscreen ? <BsFullscreenExit color="white" fontSize="1.2rem" onClick={handleFullscreen}/> : <BsFullscreen color="white" fontSize="1.2rem" onClick={handleFullscreen}/>}
                </div>
                </div>
            </div>
        </div>
    )
}

ReactVideo.propTypes = {
    videoSource: PropTypes.string.isRequired
}

export default ReactVideo;