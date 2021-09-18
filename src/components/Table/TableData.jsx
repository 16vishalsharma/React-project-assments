import React,{useEffect,useState} from 'react'
import {  useSelector } from 'react-redux';
import axios from 'axios'
import { Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Table.css'

const  TableData=()=> {
  const [apidata, setApiData]=useState();
  const {firstname,pincode,lastname}=useSelector((state) => state.items[0])

  let newDate = new Date()
  let date_raw = newDate.getDate();
let month_raw = newDate.getMonth() + 1;
let year = newDate.getFullYear();
const history=  useHistory();
useEffect(() => {
  getProductsId()
}, [])
  const getProductsId = async () => {

    const response = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date_raw}-
    ${month_raw}-${year}`).then(res => {
     
      // let arra = [];
      // arra.push(res.data);
     console.log(res.data.sessions)
      setApiData(res.data.sessions)
  
    })
   
   
  
  }
  const GoBack=()=>{
  
 
    history.push('/');
}
const UpdateValue=()=>{
  getProductsId()
}
    return (
        <div className="tablePage m-5">
          <div className="d-flex pt-4 pb-5">

          
          <h2 >{firstname }&nbsp;{lastname}</h2><span className="pincode">,{pincode}</span>
          <img src="/Assets/Mapsense-Logo.png" className="logoImages"  alt="imagelogo" />
          </div>
            <Table striped   className="fullTable" >
  <thead className="TableRow">
    <tr>
      <th>Pincode</th>
      <th>District Name</th>
      <th>Name</th>
      <th>State Name</th>
      <th>Vaccine</th>
      <th>Age Limit</th>
      <th>Slots</th>
    </tr>
  </thead>
  <tbody>
  { pincode ?
  apidata?.map((value,key) => {
 return (
    <tr>
      <td>{value.pincode}</td>
      <td>{value.district_name}</td>
      <td>{value.name}</td>
      <td>{value.state_name}</td>
      <td>{value.vaccine}</td>
      <td>{value.min_age_limit}</td>
      <td>Slots</td>
    </tr>
      )}
  ):''
}
  </tbody>
</Table>
<div className="buttonCenter">
<Button type="submit" onClick={GoBack} className="GobackButtton">
Go Back
  </Button>
  <Button type="submit" className="updateButtton "  onClick={UpdateValue}>
  Update Data
  </Button>
        </div>
        </div>
    )
}

export default TableData
