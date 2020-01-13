import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: '',
    }
    username_onChange = (event) =>{ 
        this.setState({username:event.target.value})
    }
    password_onChange = (event) =>{
        this.setState({password:event.target.value})
    }
    loginSubmit= async (event) =>{
        event.preventDefault();
        let member_name = this.state.username;
        let member_pass = this.state.password;

        if(member_name !== '' && member_pass !==''){
            let result = await axios.post('http://localhost/Rjsocialapi/member.php',{
            member_name: member_name,
            member_pass: member_pass,
            fn:'Login',
            key:'RjSocialData'
            });
            console.log(result);
        }
        else{
            alert('กรุณากรอก ชื้อผู้ใช่ เเละ รหัสผ่าน');
        }
    }
    render() {
        return (
            <div id="login-container">
                 <div id="login-brand">
                    <div>
                        <h1>Sicc Social</h1>
                        <h3>สังคมออนไลน์วิทยาลัยการอาชีพสอง</h3>
                    </div>
                </div>
                 <div id="login-form">
                    <div>
                        <h2>เข้าสู่ระบบ</h2>
                        <hr />
                        <form onSubmit={ this.loginSubmit }>
                        <div className="social-form-div">
                            <input type="text" id="username"name="username" placeholderue="ชื่อผู้ใช้"
                            value = {this.state.username}
                            onChange={
                            this.username_onChange} />
                        </div>
                        <div className="social-form-div">
                            <input type="password" id="userpass"name="userpass" placeholder="รหัสผ่าน"
                            value={this.state.password}
                            onChange={
                            this.password_onChange} />

                        </div>
                        <div className="social-form-div">
                            <button>ลงชื่อเข้าใช้</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;