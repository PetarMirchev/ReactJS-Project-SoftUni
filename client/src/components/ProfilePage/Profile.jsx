import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className='wind-container-up mt-8'>
        <br/>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
              <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                    <p className="font-weight-bold">Ed Jeison</p>
                    <p className="text-black-50">ed@mail.com.my</p>
                    <p> </p>
                  </div>
              </div>
              <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="text-right">Profile info</h4>
                      </div>
                      <div className="row mt-2">
                          <div className="col-md-6">
                            <label className="labels">Name: </label>
                            <p>user name</p>
                          </div>
                          <div className="col-md-6">
                            <label className="labels">Surname: </label>
                            <p>user surname</p>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-12">
                            <label className="labels">Mobile Number: </label>
                            <p>+359 7777 7777</p>
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Address: </label>
                            <p>Kill str. N:26</p>
                          </div>
                        
                          <div className="col-md-12">
                            <label className="labels">Postcode: </label>
                            <p>6999</p>
                          </div>
                          <div className="col-md-12">
                            <label className="labels">City: </label>
                            <p>Hustan</p>
                          </div>        
                          <div className="col-md-12">
                            <label className="labels">Email: </label>
                            <p>random@abv.bg</p>
                          </div>   
                          <div className="col-md-12">
                            <label className="labels">Country: </label>
                            <p>Bulgaria</p>
                          </div>                   
                      </div>
                      {/* <div className="row mt-3">
                          <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                          <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                      </div> */}
                      {/* <div className="mt-5 text-center">
                        <button className="btn btn-primary profile-button" type="button">Save Profile</button>
                      </div> */}
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center experience">
                      </div> 
                  </div>
              </div>
          </div>
        </div>
  </div>

  )
}

export default Profile