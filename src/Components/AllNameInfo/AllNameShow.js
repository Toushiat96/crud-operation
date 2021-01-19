import React from "react";
import { Button, Card } from "react-bootstrap";

const AllNameShow = (props) => {
  const { name, email, body } = props.infoName;
  const handleadd = () => {
    console.log("add county");
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("body", body);
    fetch("http://localhost:5000/add", {
      method: "POST",
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        
      });
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Title>{email}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={handleadd}>
          ADD
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AllNameShow;
