import React, { useState } from 'react'
import axios from 'axios'
import styles from '../styles/Contact.module.css'
const Contact = () => {


  let [userData, setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    desc:""
  })

  let handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      let {data} = await axios.post('http://localhost:3000/api/postContact',userData)
    } catch (error) {
      console.log(error);
    }
    setUserData({name:"",email:"",phone:"",desc:""})
  }
  return (
    <div >
      <h1 className={styles.heading}>Contact Form</h1>
      <div className={styles.container}>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" value={userData.name} onChange={(e)=>setUserData({...userData, name:e.target.value})} className="form-control" id="exampleInputname1" aria-describedby="nameHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" value={userData.email} onChange={(e)=>setUserData({...userData, email:e.target.value})}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">phone</label>
          <input type="phone" value={userData.phone} onChange={(e)=>setUserData({...userData, phone:e.target.value})}  className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Your Toughts</label>
          <textarea className="form-control" value={userData.desc} onChange={(e)=>setUserData({...userData, desc:e.target.value})}  id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
