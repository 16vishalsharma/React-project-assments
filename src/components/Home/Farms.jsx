import React,{useState} from 'react'
 import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { Button,Form } from 'react-bootstrap';
import { addProductItem } from '../../redux/Checkout/item.action'
import './Home.css'





function Farms() {
  const [formValue, setFormValue]=useState();
  const [Validation, setValidation]=useState(false);
 const dispatch = useDispatch();
  const history=  useHistory();
     const [inputHandle, setInputHandle]=useState(
      {
       firstname:'',
       lastname:'',
       pincode:''    
      }

     );

    

  


  
   
     const InputHandle=(e)=>{
  
         setInputHandle({
         ...inputHandle, [e.target.name]: e.target.value
        })
        setValidation(true)
     }

     const FormSubmit=(event)=>{
      event.preventDefault();
      
       setFormValue(inputHandle)
       if(Validation===true){
        dispatch(addProductItem(inputHandle))
        history.push('/table');
       }
       setValidation(false)
 

  }
    return (
        <div>
          <img src="/Assets/Mapsense-Logo.png" className="logoImages"  alt="imagelogo" />
           <Form onSubmit={FormSubmit} className="formStyle">
  <Form.Group className="mb-3" controlId="formBasicFirst">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" name="firstname" onChange={InputHandle} placeholder="Enter First Name" />
  
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLast">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" name="lastname" onChange={InputHandle} placeholder="Enter Last Name" />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPincode">
    <Form.Label>Pin Code</Form.Label>
    <Form.Control type="text" name="pincode"  onChange={InputHandle} placeholder="Pin code" />
  </Form.Group>

  <Button  className="updateButtton "  type="submit">
  Show Statstics
  </Button>
  <Button  className="GobackButtton" type="reset">
    Reset Form
  </Button>
</Form> 

        </div>
    )
}

export default Farms
