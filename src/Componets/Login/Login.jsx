import React, { Component } from 'react'
import './Login-styles.css'

export default class Login extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             email : '',
             password: ''
        }
    }
    
    onSubmitHamdler = () =>{
        alert(JSON.stringify(this.state));
    }



    onChangeHandler = (e) => {

        const {name, value} = e.target;
        

            this.setState({
                [name]:value
            })
    }

  

    render() {
        return (
            <div className="login-parent">
                <div className="login-name">
                <h1 className="title-login">Login</h1>
                </div>
                
                <div className="login-form">
                <form onSubmit={this.onSubmitHamdler}>
                        <div className="mb-3">
                        <label name="email" className="form-label">Email address</label>
                        <input type="email" onChange={this.onChangeHandler} className="form-control" name="email" value={this.state.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                        <label name="password" className="form-label">Password</label>
                        <input type="password" onChange={this.onChangeHandler}  className="form-control" id="exampleInputPassword1" name="password" value={this.state.password}/>
                        </div>
                        <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button  type="submit" className="btn submitBtn">Submit</button>
                </form>
                </div>
                
            </div>
        )
    }
}
