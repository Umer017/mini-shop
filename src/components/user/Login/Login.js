import React, { useState,useContext } from 'react'
import { Link ,useNavigate } from 'react-router-dom'
import './Login.js'
import { UserFetcherByEId } from '../../../fetcher.js'
import { CartContext } from '../../../ContextProvider.js'

const Login = () => {


  const {setLoginToTrue} = useContext(CartContext)
  const Navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const HandleSubmit = async (e) => {
    e.preventDefault()

    const response = await UserFetcherByEId(email)

    if(response.FoundedUser){
      if(response.FoundedUser.UserPassword === password){
        localStorage.setItem("UserName",response.FoundedUser.UserName)
        localStorage.setItem("UserId",response.FoundedUser._id)
        setLoginToTrue();
        Navigate('/')
        // console.log(response.FoundedUser)
      }
    }else if(response.status === 404){
      console.log("user not exist")
    } 
    
    
    }


  return (
    <section className="vh-100 gradient-custom mt-5">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5 ">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your login and password!</p>
                  <form onSubmit={HandleSubmit}>
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)} />
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)} />
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                    </div>

                    <p className="small mb-5 pb-lg-2"><p className="text-white-50" href="#!">Forgot password?</p></p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                  </form>
                  <div className="d-flex justify-content-center text-center mt-4 pt-1">
                    <p className="text-white"><i className="fab fa-facebook-f fa-lg"></i></p>
                    <p className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></p>
                    <p className="text-white"><i className="fab fa-google fa-lg"></i></p>
                  </div>

                </div>

                <div>
                  <p className="mb-0">Don't have an account? <Link to={'/Register'}>Sign Up</Link></p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login