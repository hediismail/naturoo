import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loginUser, registerUser } from '../Redux/Action/authAction.js'
//  import {current} from '../Redux/Action/authAction'

import './sing.css'
import Navbar from '../Shared/navbar.js'
import Footer from '../Shared/footer.js'
const Signup = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [adresse, setAdresse] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [role, setRole] = useState('');
  //const [role, setRole] = useState('searcher');
  const dispatch = useDispatch()
  const history = useHistory()
  const user = [email, password]

  return (
    <div>
      <Navbar />
      <a href="#https://front.codes/" className="logo" target="_blank"></a>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                {/************* Login Form ****************/}
                <h6 className=" inout mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className=" in mb-4 pb-3">Log In</h4>

                          <div className="form-group">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <div className="group">
                            <input
                              type="submit"
                              className="btn"
                              defaultValue="Sign In"
                              onClick={() =>
                                dispatch(
                                  loginUser({ email, password }, history),
                                )
                              }
                            />
                          </div>
                          <p className="mb-0 mt-4 text-center">
                            <p>Vous n'avez pas de compte...Inscrivez-vous.</p>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          {/* *************** Register Form  **************/}
                          <h4 className=" in mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logname"
                              className="form-style"
                              placeholder="Your Name"
                              id="logname"
                              autoComplete="off"
                              onChange={(e) => setName(e.target.value)}
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="loglastname"
                              className="form-style"
                              placeholder="Your Lastname"
                              id="loglastname"
                              autoComplete="off"
                              onChange={(e) => setLastname(e.target.value)}
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logphone"
                              className="form-style"
                              placeholder="Your Phone Number"
                              id="logphone"
                              autoComplete="off"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              name="logadresse"
                              className="form-style"
                              placeholder="Your Adress"
                              id="logadresse"
                              autoComplete="off"
                              onChange={(e) => setAdresse(e.target.value)}
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autoComplete="off"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <div className="group">
                            <input
                              type="submit"
                              className="btn"
                              defaultValue="Sign Up"
                              onClick={() =>
                                dispatch(
                                  registerUser(
                                    {
                                      name,
                                      lastname,
                                      phone,
                                      adresse,
                                      email,
                                      password,
                                    },
                                    history,
                                  ),
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
