import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../../assets/logo.png"

const Home = () => {
  return (
    <>
      <section id="header" className='home d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>
                Shape your career with  
                <strong className='brand-name'> <br/>D1 Dance Fitness and Art Academy</strong>
                </h1>
                <h2 className='my-3'>
                  We are a team of experienced and talented dancers and artists.
                </h2>
                <div className="mt-3">
                  <NavLink to="/service" className="btn-get-started" role="button" style={{borderRadius:'30px',pointerEvents:'revert'}}>
                  Get Started                   
                  </NavLink>
                </div>
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={web} className="img-fluid animated" alt='home img' />
              </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Home