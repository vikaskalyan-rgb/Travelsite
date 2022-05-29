import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogReg.css';
import Jinx from '../assets/temple.mp4'

class Logging extends React.Component {
  //set the state default value
  constructor(props) {
    super(props);
    this.state = {login: 'show col-lg-6 px-lg-4', register: 'hide'};
  }
  showlogin= () => { //button click functionality
  
    this.setState({login: 'show col-lg-6 px-lg-4'});
    this.setState({register: 'hide'});
  }

  showregister= () => { //button click functionality
  
    this.setState({login: 'hide'});
    this.setState({register: 'show col-lg-6 px-lg-4'});
  }
  render() {
   
    return (
    <div className="appit">
      <div className='video'>
              <video src={Jinx} autoPlay loop muted id='video'>
            </video></div>
     <div className="page-holders">
      <div className="container">
        <div className="row align-items-center">
          <div className={this.state.login}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary"></div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4" style={{color:'white' ,opacity:'1000%'}}>Hi, welcome back! </h3>
                <p className="text-muted text-sm mb-5">Use your credentials and login!</p>
                <form id="loginForm" action="index.html">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="Enter your E-mail id" required />
                    <label for="floatingInput"></label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword"></label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                    <label className="form-check-label" for="remember">Remember me</label>
                  </div>
                  <button className="btn btn-primary" type="button">Submit</button>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Don't have an account? <a onClick={this.showregister}>Register</a>.</div>
              </div>
            </div>
          </div>
          {/*} register {*/}
           <div className={this.state.register}>
            <div className="card">
              <div className="card-header px-lg-5">
                <div className="card-heading text-primary"></div>
              </div>
              <div className="card-body p-lg-5">
                <h3 className="mb-4" style={{color:'white'}}>Welcome to GreatTN</h3>
                <p className="text-muted text-sm mb-5">Register by submitting the necessary information!</p>
                <form action="index.html">
                  <div className="form-floating mb-3">
                    <input className="form-control" id="username" type="email" placeholder="Enter your firstname" required />
                    <label for="username"></label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingInput" type="email" placeholder="Enter your E-mail id" required />
                    <label for="floatingInput"></label>
                  </div>
                  <div className="form-floating mb-3">
                    <input className="form-control" id="floatingPassword" type="password" placeholder="Password" required />
                    <label for="floatingPassword"></label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" name="agree" id="agree" />
                    <label className="form-check-label" for="agree">I agree with the <a href="#">Terms & Conditions</a>.</label>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary" id="regidter" type="button" name="registerSubmit">Register</button>
                  </div>
                </form>
              </div>
              <div className="card-footer px-lg-5 py-lg-4">
                <div className="text-sm text-muted">Already have an account? <a onClick={this.showlogin} >Login</a>.</div>
              </div>
            </div>
          </div>
         <div className="col-lg-6 col-xl-5 ms-xl-auto px-lg-4 text-center text-primary"><img className="img-fluid mb-4" width="300" src="" alt="" style={{transform: "rotate(10deg)"}} />
            <h1 className="mb-4">GREAT TN <br className="d-none d-lg-inline" />EXPLORE IT NOW</h1>
            <p className="lead text-muted">We take people to the places where they can take memories back with them.</p>
            <a href="/" className="linker" style={{color:'white'}}>Go Back</a>
          </div>
        </div>
      </div>
    </div>
    </div>
)
};
}
export default Logging;