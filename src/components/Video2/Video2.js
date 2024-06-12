import video from '../../assets/delivery_video.mp4'
import './Video2.css'


export default function Video() {

  return (
    <div className="video">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}