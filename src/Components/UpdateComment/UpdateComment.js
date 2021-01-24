import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

const UpdateComment = () => {
// const history = useHistory()
const{id}= useParams();
console.log(id);
const [data , setDate] = useState([])
console.log(data);
useEffect(() =>{
fetch(`https://lit-hollows-62970.herokuapp.com/editcomment/${id}`)
.then(response => response.json())
.then(data =>setDate(data[0]))
},[])

const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
  const formdata = new FormData();
  formdata.append('id',id);
  formdata.append('name',data.name);
  formdata.append('email',data.email);
  fetch(`https://lit-hollows-62970.herokuapp.com/update/${id}`,{
    method:'PATCH',
 body: formdata
  
  })
  .then(response => response.json())
  .then(data => {
  
  })
  }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
      <input name="name" defaultValue={data.name} ref={register} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input name="email"defaultValue={data.email}  ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    );
};

export default UpdateComment;