import { Component } from "react";
import axios from 'axios';
import { variables } from "../Variables";
import './Navigation.css';
import React from "react";
import { Item } from "@syncfusion/ej2-react-splitbuttons";
export class AddPerson extends Component{

    constructor(props) {
      super(props)
    
      this.state = {        
        name:'',
        email:'',
        phone:'',
        password:''
      }
    }
    handleChange=(e) =>{  
           
        this.setState({
            [e.target.id]:e.target.value,            
        })
  
        
    }
Reg=(e)=>
{
    alert("Registerd Succesfully");
}
   handleSubmit=(e) =>{      
        e.preventDefault();  
            
        axios({
            method:'post',
            url:variables.API_URL,
            data:{
                name:this.state.name,
                email:this.state.email,
                phone:this.state.phone,
                password:this.state.password
            }
        })
    }


    render(){        
        return(            
            <div><h1><i>REGISTRATION</i></h1><br />
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Name</strong></label><br />
                    <input type='text' ref="name" id='name' name='name' value={this.state.name} onChange={this.handleChange}  ></input><br />
                    <label><strong>Email</strong></label><br />
                    <input type='email' id='email' name='email' value={this.state.email} onChange={this.handleChange} required=""></input><br />
                    <label><strong>Phone</strong></label><br />
                    <input type='number' id='phone' name='phone' value={this.state.phone} onChange={this.handleChange} required=""></input><br />
                    <label><strong>Password</strong></label><br />
                    <input type='password' id='password' name='password' value={this.state.password} onChange={this.handleChange} required="" ></input><br /><br/>
                    <button type='submit' onClick={this.Reg}>Register</button>
                </form>    
            </div>
        )
    }
}

export default AddPerson