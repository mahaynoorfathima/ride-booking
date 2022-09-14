import React from "react";
import './viewfeedback.css';
import {Table, Button} from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Feedback } from "../Variables";
export class ViewFeed extends Component{

 // Constructor
 
 constructor(props) {
  super(props);

  this.state = {
   items: [],
   DataisLoaded: false
  };
 }

 // ComponentDidMount is used to
 // execute the code
 componentDidMount() {
  fetch(
"http://localhost:5138/api/v1.0/rideapp/feedback/all")
   .then((res) => res.json())
   .then((json) => {
    this.setState({
     items: json,
     DataisLoaded: true
    });
   })
 }
 handleDelete=(e) =>{      
  e.preventDefault();  
        
  axios({
      method:'Delete',
      url:Feedback.API_URL,
      data:{
         Name:this.state.Name,
         Time:this.state.Time,
         feedback:this.state.feedback
      }
  })
}
 render() {
  const { DataisLoaded, items } = this.state;
  if (!DataisLoaded) return <div>
   <h1> Pleses wait some time.... </h1> </div> ;

  return (
  <div className = "App">
    <h1> View FeedBcak</h1> 
   <center><Table border="2" >
   <div>
   <tr>
     <th>Name</th>
     <th>FeedBack</th>
     <th>Time</th>
     <th colSpan={2}>change feedback</th>
   </tr>
   
   
      {
   
    items.map((item) => (
<tr>
          <td >{ item.name }</td>
          <td>{ item.feedback }</td>
          <td>{ item.time }</td>
         <td>
          <Link to={'/update'}>
          <Button onClick={(e) =>alert(item.id)}>Update</Button>
          </Link>
          &nbsp;
          
         </td>
         <Link to={'/delete'}>
         <td><Button onClick={this.handleDelete}>Delete</Button></td>
         </Link>
          
        </tr>
    
    ))
    
   }
     </div>
  </Table>
  </center>
  </div>
 );
}
}
export default ViewFeed;
