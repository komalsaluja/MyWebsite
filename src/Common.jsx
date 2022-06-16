import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = (props) => {
  return (
    <>
      <section id="header" className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>

              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                <h1>
                {props.txt1}  
                <strong className='brand-name'> <br/>D1 Dance Fitness and Art Academy</strong>
                </h1>
                <h2 className='my-3'>
                  We are a team of experienced and talented dancers and artists.
                </h2>
                <div className="mt-3">
                  <NavLink to={props.navigateTo} className="btn-get-started" role="button" style={{borderRadius:'30px',pointerEvents:'revert'}}>
                  {props.txt2}                 
                  </NavLink>
                </div>
              </div>

              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.imgsrc} className="img-fluid animated" alt='home img' />
              </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Common;