"use client"
import React, { useState } from 'react'
import MuslimDirectoryForm from './SkillPerson'
import BusinessOwnerForm from './BuisnessForm'

const MainForm = () => {
    const [form,setForm]=useState("buisnessOwner")
  return (
    
           
           <>{form!=="buisnessOwner"?<MuslimDirectoryForm setForm={setForm}/>:<BusinessOwnerForm setForm={setForm}/>}</> 
  )
}

export default MainForm
