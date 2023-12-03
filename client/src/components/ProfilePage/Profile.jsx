import React, { useContext } from 'react';
import './profile.css';
import AuthContext from '../../context/AuthContext'

const Profile = () => {

  const { username, email,  country, img, city, phone } = useContext(AuthContext);

  return (
    <div className='wind-container-up mt-8'>
        <br/>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
              <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                    <img className="rounded-circle mt-5" width="150px" src={img}  alt='Spam-Random-User'/>
                    <p className="font-weight-bold">{username}</p>
                    <p className="text-black-50">{email}</p>
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
                            <p>{username}</p>
                          </div>
                          <div className="col-md-6">
                            <label className="labels">Surname: </label>
                            <p>{username}</p>
                          </div>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-12">
                            <label className="labels">Mobile Number: </label>
                            <p>{phone}</p>
                          </div>
                          <div className="col-md-12">
                            <label className="labels">Address: </label>
                            <p>{country} {city}</p>
                          </div>
                                        
                          <div className="col-md-12">
                            <label className="labels">City: </label>
                            <p>{city}</p>
                          </div>        
                          <div className="col-md-12">
                            <label className="labels">Email: </label>
                            <p>{email}</p>
                          </div>   
                          <div className="col-md-12">
                            <label className="labels">Country: </label>
                            <p>{country}</p>
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