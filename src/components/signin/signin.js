import React, { Component } from 'react';
import './signin.css';
import './util.css';
import Background from './images/img-01.jpg';
import logo from './images/true.jpg'; 
import {
	withRouter
  } from 'react-router-dom'

var sectionStyle={
    backgroundImage: "url("+ Background +")"
};

class SignIn extends Component {
	constructor(props){
		super(props);
 
		this.state = {
			fields: {},
			errors: {}
		}
	 }
	 handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["username"]){
           formIsValid = false;
           errors["username"] = "Cannot be empty";
        }
		
		//Password
        if(!fields["pass"]){
			formIsValid = false;
			errors["pass"] = "Cannot be empty";
		 }
 

        //Email
    //     if(!fields["email"]){
    //        formIsValid = false;
    //        errors["email"] = "Cannot be empty";
    //     }

    //     if(typeof fields["email"] !== "undefined"){
    //        let lastAtPos = fields["email"].lastIndexOf('@');
    //        let lastDotPos = fields["email"].lastIndexOf('.');

    //        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
    //           formIsValid = false;
    //           errors["email"] = "Email is not valid";
    //         }
	//    }  
	

       this.setState({errors: errors});
       return formIsValid;
   }

   contactSubmit(e){
        e.preventDefault();

        if(this.handleValidation()){
		   alert("Form submitted"); 
		   //await Auth.signIn(this.state.email, this.state.password);
			//this.props.userHasAuthenticated(true);
			this.props.history.push('/user')
        }else{
           //alert("Form has errors.")
        }

    }

    handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }
  render() {
    return (
        // <BrowserRouter>
      <div className="limiter">
		<div className="container-login100" style={ sectionStyle }>
			<div className="wrap-login100 p-t-190 p-b-30">
				<form className="login100-form validate-form" onSubmit= {this.contactSubmit.bind(this)}>
					<div className="login100-form-avatar">
						<img src={logo} />
					</div>

					<span className="login100-form-title p-t-20 p-b-45">
						EX2 Soultions India Pvt Ltd
					</span>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Username is required">
						<input className="input100" type="text" name="username" onChange={this.handleChange.bind(this, "username")} value={this.state.fields["username"]} placeholder="Username" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user"></i>
						</span>
						<span style={{color: "red"}}>{this.state.errors["username"]}</span>
					</div>

					<div className="wrap-input100 validate-input m-b-10" data-validate = "Password is required">
						<input className="input100" type="password" name="pass" onChange={this.handleChange.bind(this, "pass")} value={this.state.fields["pass"]} placeholder="Password" />
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-lock"></i>
						</span>
						<span style={{color: "red"}}>{this.state.errors["pass"]}</span>
					</div>

					<div className="container-login100-form-btn p-t-10">
						<button type="submit" className="login100-form-btn">
							Login
						</button>
					</div>

					<div className="text-center w-full p-t-25 p-b-230">
						{/* <Link to="/user" className="txt1">
							Forgot Username / Password?
						</Link> */}
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
		{/* <Route exact path="/" component={SignIn} />
        <Route path="/user" component={User} /> */}
	</div>
    /* </BrowserRouter> */
    );
  }
}

export default withRouter(SignIn);