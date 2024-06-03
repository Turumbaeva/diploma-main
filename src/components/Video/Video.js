import video from '../../assets/video.mp4'
import './Video.css'

export default function Video() {

  return (
    <div className="video">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}