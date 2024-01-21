import './VideoContainer.css';

export function VideoContainer(){
    return (
        <div id = "videoContainer">
            <video id='videoElement'>
            <source src="https://www.w3schools.com/tags/movie.mp4" controls autoplay muted type="video/mp4"></source>
            Your browser does not support the video tag.
            </video>
            <div id = "videoBackground"></div>
        </div>
    )
}