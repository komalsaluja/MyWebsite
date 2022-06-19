import React from 'react'

const Videohome = (props) => {
  return (
    <div>
        <div className='youtube' style={{margin:'0px',padding:'0',alignContent:'initial'}}>
     <iframe 
     width="560" 
     height="315" 
     src={props.videosrc}
     title="YouTube video player" 
     frameborder="0" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen

     style={{borderRadius:'50%'}}
     ></iframe>
     </div>
    </div>
  )
}

export default Videohome