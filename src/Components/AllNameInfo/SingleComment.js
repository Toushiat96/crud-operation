import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const SingleComment = (props) => {
    const{name,email,body,_id} =props.comment;
    
    
    const handledelete=()=>{
    // const formdata = new FormData();
    // formdata.append("id",id)
    fetch(`http://localhost:5000/delete/${_id}`,{
    method:'DELETE',
   
    })
    .then(response => response.json())
    .then(data =>{
    
    })
    }
    return (
        <Card style={{ width: '18rem' }}>
  
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Title>{email}</Card.Title>
          <Card.Text>
           {body}
          </Card.Text>
          <Link to={"/edit/"+_id}>
          <Button variant="primary" >EDIT</Button></Link>
          <Button variant="danger" onClick={handledelete}>DELETE</Button>
        </Card.Body>
      </Card>
    );
};

export default SingleComment;