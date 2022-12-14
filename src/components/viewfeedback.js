import React from "react";
import './viewfeedback.css';
import {Table, Button} from 'react-bootstrap';
//import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import { format } from 'react-string-format';
import { Feedback } from "../Variables";
import { Updates } from './update';
export class ViewFeed extends Component{

 // Constructor
 
 constructor(props) {
  super(props);

  this.state = {
   
   items: [],
   DataisLoaded: false
  };
 }
 handleCallback = (childData) =>{
  this.setState({data: childData})
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

 handleDelete = id =>(e) =>{      
  e.preventDefault(); 
          
  axios({
      method:'Delete',
      url:format(Feedback.API_URL,id),
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
 const {data} = this.state;
  return (
  <div className = "App">
    <h1> View FeedBcak</h1> 
   <center><Table border="2" >
  
    
   <div>
   <tr>
    <th>Id</th>
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
          <Link to={`/update/?${item.id}`}>
            
          <Button >Update</Button>
          
          </Link>
          &nbsp;
          
         </td>
         
         <td><Button onClick={this.handleDelete(`${item.id}`)} >Delete</Button></td>
        
          
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
