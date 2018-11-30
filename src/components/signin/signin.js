import React, { Component } from 'react';
import './signin.css';
import './util.css';
import Background from './images/img-01.jpg';
import logo from './images/true.jpg';

var sectionStyle={
    backgroundImage: "url("+ Background +")"
};

class SignIn extends Component {
  render() {
    return (
      <div className="limiter">
		<div className="container-login100" style={ sectionStyle }>
			<div className="wrap-login100 p-t-190 p-b-30">
				<form className="login100-form validate-form">
					<div className="login100-form-avatar">
						<img src={logo} />
					</div>

					<span className="login100-form-title p-t-20 p-b-45">
						EX2 Soultions India Pvt Ltd
					</span>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Username is required">
						<input className="input100" type="text" name="username" placeholder="Username" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" placeholder="Password" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock"></i>
						</span>
					</div>

					<div className="container-login100-form-btn p-t-10">
						<button className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center w-full p-t-25 p-b-230">
						<a href="./user" className="txt1">
							Forgot Username / Password?
						</a>
					</div>

					{/* <div className="text-center w-full">
						<a className="txt1" href="/s">
							Create new account
							<i className="fa fa-long-arrow-right"></i>						
						</a>
					</div> */}
				</form>
			</div>
		</div>
	</div>
    );
  }
}

export default SignIn;