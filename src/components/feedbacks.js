import { Component } from "react";
import axios from 'axios';
import { Feedbackk } from "../Variables";

export class Feeds extends Component{

    constructor(props) {
      super(props)
    
      this.state = {        
        Name:'',
        Time:'',
        feedback:''
      }
    }
    Reg=(e)=>
    {
        alert("Thank You For Your Valuable FeedBack");
    }
    handleChange=(e) =>{        
        this.setState({
            [e.target.id]:e.target.value,            
        })
    }

    handleSubmit=(e) =>{      
        e.preventDefault();  
              
        axios({
            method:'Post',
            url:Feedbackk.API_URL,
            data:{
               Name:this.state.Name,
               Time:this.state.Time,
               feedback:this.state.feedback
            }
        })
    }


    render(){        
        return(            
            <div><h1><i>PROVIDE YOUR FEEDBACK HERE</i></h1><br />
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Name</strong></label><br />
                    <input type='text' id='Name' name='Name' value={this.state.Name} onChange={this.handleChange}  required=""></input><br />
                    <label><strong>Time</strong></label><br />
                    <input type='time' id='Time' name='Time' value={this.state.Time} onChange={this.handleChange} required=""></input><br />
                    <label><strong>feedback</strong></label><br />
                    <input type='text' id='feedback' name='feedback' value={this.state.feedback} onChange={this.handleChange}  required=""></input><br /><br/>
                    <button type='submit' onClick={this.Reg}>Submit</button>
                </form>    
            </div>
        )
    }
}

export default Feeds;