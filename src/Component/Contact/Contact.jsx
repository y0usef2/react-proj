import React from 'react'
import Form from 'react-bootstrap/Form'
export default function Contact() {
  return (
    <div className='mt-5 mb-5 pb-5 vh-100 '>
      <div className='container  w-75 mt-5 pt-1'>
        <div className='row g-5 mt-3 pb-5'>
          <div className='col-md-12 text-center'>
            <h2 className=''>CONATCT SECTION</h2>
            <i class='fa-solid fa-star'></i>
            <form action="">
              <div className='container w-75'>
                <div className='row'>
                  <div className='col-md-12'>
                  
                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
                
                <Form.Control type="text"  placeholder="userName" />
                </Form.Group> 
                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
                 
                <Form.Control type="numper"  placeholder="userAge" />
                </Form.Group> 
                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
                 
                <Form.Control type="email"  placeholder="userEmail" />
                </Form.Group> 
                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
                
                <Form.Control type="email"  placeholder="userPaswoord" />
                </Form.Group>

                <button className='btn btn-success d-inline-block d-flex mt-3'>
                  send Message
                </button>
               


                  </div>
                </div>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}
