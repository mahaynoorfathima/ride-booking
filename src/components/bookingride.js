import { Component } from "react";
import axios from 'axios';
import { variabless } from "../Variables";

export class Booking extends Component{

    
    constructor(props) {
      super(props)
    
      this.state = {        
        Destination:'',
        RideType:''
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
            method:'post',
            url:variabless.API_URL,
            data:{
                Destination:this.state.Destination,
               RideType:this.state.RideType
            }
        })
    }


    render(){        
        return(            
            <div><h1><i>BOOKING A RIDE</i></h1><br />
                <form onSubmit={this.handleSubmit}>
                    <label><strong>Destination</strong></label><br />
                    <input type='text' id='Destination' name='Destination' value={this.state.Destination} onChange={this.handleChange}  required=""></input><br /><br/>
                    <label><strong>RideType</strong></label><br />
                    <input type='text' id='RideType' name='RideType' value={this.state.RideType} onChange={this.handleChange} required=""></input><br /><br/>
                    
                    <button type='submit'>Book Ride</button>
                </form>    
            </div>
        )
    }
}

export default Booking