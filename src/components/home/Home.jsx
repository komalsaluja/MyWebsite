import './home.css'
// import { NavLink } from 'react-router-dom'
import React, { Fragment, Component } from 'react';
import MediaQuery from 'react-responsive';
// import Director from '../director/Director';
import Map from '../Map'
// import FetchProducts from '../courses/FetchProducts';
// import CourseCard from '../courses/CourseCard';
import CourseBunch from '../courses/CourseBunch';
import Courses1 from '../Courses1';


class Home extends Component {
    render() {
        return (
            <Fragment>
              <MediaQuery minDeviceWidth={1224} >
                    <div className="rwd-video">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Ja5uJr7M90?playlist=4Ja5uJr7M90&controls=0&autoplay=1&loop=1&mute=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope;" allowfullscreen style={{pointerEvents:'none'}}></iframe>
   </div> 
                </MediaQuery>
                <MediaQuery maxDeviceWidth={1224}>
                <div className="rwd-video">
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Ja5uJr7M90?playlist=4Ja5uJr7M90&controls=0&autoplay=1&loop=1&mute=1&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; modestbranding; clipboard-write; encrypted-media; gyroscope;" allowfullscreen ></iframe>
   </div>  
                </MediaQuery>

                {/* <FetchProducts/> */}
                <CourseBunch/>
                <Courses1/>
            <Map />
            </Fragment>
        );
    }
}

export default Home;









































 
        