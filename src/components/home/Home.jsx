import './home.css'
// import { NavLink } from 'react-router-dom'
//  import director from "../../assets/director.png"
import React, { Fragment, Component } from 'react';
import MediaQuery from 'react-responsive';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <div>Device Test!</div>

                <MediaQuery minDeviceWidth={1224}>
                    <div class="rwd-video">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Ja5uJr7M90?playlist=4Ja5uJr7M90&controls=0&autoplay=1&loop=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope;" allowfullscreen style={{pointerEvents:'none'}}></iframe>
   </div> 
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                <div class="rwd-video">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Ja5uJr7M90?playlist=4Ja5uJr7M90&controls=0&autoplay=1&loop=1&mute=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope;" allowfullscreen ></iframe>
   </div>  
                </MediaQuery>

            </Fragment>
        );
    }
}

export default Home;









































 
        //  <div>
        //   <img src={director} alt='director' style={{width:'100%'}}/>
        //   </div> 
    