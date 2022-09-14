import { Component } from "react";
import axios from 'axios';
import { variable } from "../Variables";
import { Link } from "react-router-dom";
export class Login extends Component{

    constructor(props) {
      super(props)
    
      this.state = {        
        name:'',
        
        password:''
      }
    }

    handleChange=(e) =>{        
        this.setState({
            [e.target.id]:e.target.value,            
        })
    }

    handleSubmit=(e) =>{      
        e.preventDefault();  
              
        axios({
            method:'get',
            url:variable.API_URL,
            data:{
                name:this.state.name,
                
                password:this.state.password
            }
        })
    }


    render(){        
        return(            
            <div><h1><i>LOGIN</i></h1><br />
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Name</strong></label><br />
                    <input type='text' id='name' name='name' value={this.state.name} onChange={this.handleChange} ></input><br />
                    
                    <label><strong>Password</strong></label><br />
                    <input type='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} ></input><br/><br/>
                    <button type='submit'> <a href="bookingride"><font color="black">Login</font></a></button>
                </form>    
            </div>
        )
    }
}

export default Login