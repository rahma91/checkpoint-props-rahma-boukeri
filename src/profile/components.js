import React from 'react'
import '../App.css'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import  tofprofile from "../assets/tofprofile.jpg";
import { prototype } from "prop-types";
import { propTypes } from 'react-bootstrap/esm/Image';


const Components = ({name,profession,bio}) => {
    return (
        <div>
             <div style={{width:'400px' , height:'500px' , fontWeight:'0.5' , backgroundColor:'rgba(0, 0, 0, 0.5)', borderRadius:'5%' , margin:'100px 600px', display:'flex' ,justifyContent:'center'}}>
                
                <Card style={{ width: '300px' , height:'470px' , display:'flex' , alignItems: 'center' , margin:'10px 10px' }}>
                   <Card.Img variant="top" style={{width:'250px',display:'flex' ,justifyContent:'center'}} src={tofprofile} />
                   <Card.Body>
                        <Card.Title style={{fontSize:'30px'}}>{name}</Card.Title>
                        <Card.Text style={{fontWeight:"bold"}}> {profession} </Card.Text>
                        <Card.Text> {bio} </Card.Text>

                                     {/* <Button variant="primary">Go somewhere</Button> */}
                   </Card.Body>
                </Card>      
             </div>
        </div>
    )
}

export default Components

Components.prototype = {
    name : propTypes.string,
    bio : propTypes.string,
    profession : propTypes.string

}