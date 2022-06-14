import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div>
     <div class="embed-responsive embed-responsive-4by3" style={{borderRadius:'10px'}}>
     <iframe class="embed-responsive-item" title='youtube-video' src="https://www.youtube-nocookie.com/embed/qBsmpqdKPyk?playlist=qBsmpqdKPyk&controls=0&loop=1&mute=1&autoplay=1&playsinline=1" allowfullscreen style={{width:'100%',height:'500px',borderRadius:'30px'}}></iframe>
     </div>
    </div>
  )
}

export default Header