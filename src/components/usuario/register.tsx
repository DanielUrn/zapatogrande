import React, { ChangeEvent, ChangeEventHandler, PureComponent, useState } from 'react'
import { FormEvent } from 'react'
import axios from 'axios'

const Register = () =>{

    const [usuario,setUsuario] = useState({
        nombre:"",
        correo:"",
        contra:"",
        rol:[]
    })
    
    const input = (e: ChangeEvent<HTMLInputElement>) =>{
        setUsuario({...usuario,[e.target.name]:e.target.value})
    }

    const submit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        await axios.post('http://localhost:3001/signup',usuario)
    }
    return (
        <div className="content m-5 ">
          
        <form className="row g-3 m-2" onSubmit={submit}>
            
            <div className="row p-5 text-center" >
              <label htmlFor="validationDefault01"  className="form-label" >Nombre</label>
              <input type="text" className="form-control" onChange={input} name="nombre" id="validationDefault01"  required />
            </div>
            
            <div className="row p-5 text-center">
              <label htmlFor="validationDefault02"  className="form-label">Email</label>
              <input type="email" className="form-control" onChange={input}  name="correo" id="validationDefault01"  required />
            </div>
            
            <div className="row p-5 text-center">
              <label htmlFor="validationDefault03" className="form-label">Contraseña</label>
              <input  type="password" className="form-control" onChange={input} name="contra" id="validationDefault02"  required />
            </div> 
            <div className="col-12 text-center">
              <button className="btn btn-primary">Registrarse</button>
            </div>
          </form>
        </div> 
        );
}

export default Register