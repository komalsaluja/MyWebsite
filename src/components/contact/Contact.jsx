import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <>
    <div className='my-5'>
      <h1 className="text-center" style={{color:"whitesmoke"}}>
      Contact US
        </h1>
        </div>

        <div className="contaier contact_div">
          <div className="row">
            <div className = "col-md-6 col-10 mx-auto">
              <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                  </label>
                  <input type="text" 
                  class="form-control"
                  id="exampleFormControlInput1" 
                  placeholder="Enter your Name"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                  </label>
                  <input type="number" 
                  class="form-control"
                  id="exampleFormControlInput1" 
                  placeholder="Mobile Number"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                  </label>
                  <input type="email" 
                  class="form-control"
                  id="exampleFormControlInput1" 
                  placeholder="name@example.com"/>
              </div>

              <div className="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
             </div>
              </form>
            </div>
          </div>
        </div>
        </>
  )
}

export default Contact