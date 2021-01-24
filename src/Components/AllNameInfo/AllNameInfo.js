import React, { useEffect, useState } from 'react';
import AllNameShow from './AllNameShow';
import SingleComment from './SingleComment';

const AllNameInfo = () => {
const[allName , setallName]=useState([])
const [nameshow,setshowname]=useState([])
useEffect(() =>{
fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data=>setallName(data.slice(0,10)))
})
const handleshow =()=>{
    
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data=>setallName(data.slice(0,10)))
    
}
useEffect(() =>{
fetch('http://localhost:5000/show')
.then(response => response.json())
.then(data=>{
setshowname(data)
})
})

    return (
    <div className="container">
        <div className="row text-center">
            <div className="col-md-6 col-12">
            all nameshow
            {
              allName.map(infoName =><AllNameShow handleshow={handleshow} infoName={infoName}></AllNameShow>)
            }
            </div>
            
            <div className="col-md-6 col-12">
            {
            nameshow.map(comment=><SingleComment comment={comment}></SingleComment>)
            
            }
            </div>
        </div>
        </div>
    );
};

export default AllNameInfo;